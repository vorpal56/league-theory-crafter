import os
import boto3
from datetime import datetime

APP_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
BACKEND_PATH = os.path.join(APP_PATH, "server")
DATA_PATH = os.path.join(BACKEND_PATH, "data")
OBJECT_BASE_PATHS = ["json", "json_combined_champion_cache"] # The paths to upload files from

filename = "aws_credentials"
if __name__=="__main__":
	credentials_path = os.path.join(BACKEND_PATH, "src", filename)
	valid_tags = set(["id", "secret", "bucket_name", "distribution_id"])
	print("\nDeploying to static files to AWS...\n")
	if not os.path.exists(credentials_path):
		print(f"You don't have a key file. Create {filename} in {credentials_path} with {valid_tags}")
	else:
		credentials = {}
		with open(credentials_path, "r") as credentials_file:
			try:
				for line in credentials_file:
					tag, val = line.strip().split("=")
					credentials[tag] = val
				if all([key in valid_tags and val is not None for key, val in credentials.items()] + [len(credentials) == 4]):
					s3_client = boto3.client(
						service_name='s3',
						aws_access_key_id = credentials.get("id"),
						aws_secret_access_key = credentials.get("secret")
					)
					bucket_name = credentials.get("bucket_name")
					for i, object_path_name in enumerate(OBJECT_BASE_PATHS):
						dir_path = os.path.join(DATA_PATH, object_path_name)
						for full_filename in os.listdir(dir_path):
							file_path_to_upload = os.path.join(dir_path, full_filename)
							if os.path.isfile(file_path_to_upload):
								object_path = "/".join([object_path_name, full_filename])
								s3_client.upload_file(file_path_to_upload, bucket_name, object_path, ExtraArgs={'ACL': 'public-read'})
					cloudfront_client = boto3.client(
						service_name="cloudfront",
						aws_access_key_id = credentials.get("id"),
						aws_secret_access_key = credentials.get("secret")
					)
					response = cloudfront_client.create_invalidation(
						DistributionId=credentials.get("distribution_id"),
						InvalidationBatch={
							"Paths": {
								"Quantity": len(OBJECT_BASE_PATHS),
								"Items": [f"/{object_base_path}/*" for object_base_path in OBJECT_BASE_PATHS]
							},
							"CallerReference": str(round(datetime.timestamp(datetime.now())))
						}
					)
					print(response)
			except Exception as e:
				print(e)
