import os
import boto3
from datetime import datetime

APP_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
DIST_PATH = os.path.join(APP_PATH, "dist", "league-theory-crafter")
BACKEND_PATH = os.path.join(APP_PATH, "server")
DATA_PATH = os.path.join(BACKEND_PATH, "data")
CREDENTIALS_FILENAME = "aws_credentials"
CREDENTIALS_PATH = os.path.join(BACKEND_pPATH, "src", CREDENTIALS_FILENAME)
OBJECT_BASE_PATHS = ["json", "json_combined_champion_cache"] # The paths to upload server data from
PUBLIC_READ = {'ACL': 'public-read'} # Object properties when uploading need to be public
REQUIRED_VARS = set(["id", "secret", "bucket_name", "distribution_id"]) # Tags defined in the credentials

def register_credentials():
	credentials = {}
	has_required_vars = False
	existing_vars = set()
	if not os.path.exists(CREDENTIALS_PATH):
		print(f"You don't have a credentials file. Add {', '.join(var for var in REQUIRED_VARS)} into the file in {CREDENTIALS_PATH}.")
		f = open(CREDENTIALS_PATH, "w")
		f.close()
	else:
		with open(CREDENTIALS_PATH, "r") as credentials_file:
			for line in credentials_file:
				var, val = line.strip().split("=")
				credentials[var] = val
				existing_vars.add(var)
		missing_vars = REQUIRED_VARS.difference(existing_vars)
		has_required_vars = len(missing_vars) == 0
		print(f"Credentials are not valid. Add {', '.join(var for var in missing_vars)} into the credentials.")
	return credentials, has_required_vars

def upload_s3(credentials):
	print("Uploading files to AWS...")
	# Make sure that all the credentials exist and are not empty
	s3_client = boto3.client(
		service_name='s3',
		aws_access_key_id = credentials.get("id"),
		aws_secret_access_key = credentials.get("secret")
	)
	bucket_name = credentials.get("bucket_name")
	# Upload the contents of server data from OBJECT_BASE_PATHS
	for i, object_path_name in enumerate(OBJECT_BASE_PATHS):
		dir_path = os.path.join(DATA_PATH, object_path_name)
		for full_filename in os.listdir(dir_path):
			file_path_to_upload = os.path.join(dir_path, full_filename)
			if os.path.isfile(file_path_to_upload):
				object_name = "/".join([object_path_name, full_filename])
				s3_client.upload_file(file_path_to_upload, bucket_name, object_name, ExtraArgs=PUBLIC_READ)
	# Upload the build by walking through the DIST_PATH
	for root, _, files in os.walk(DIST_PATH):
		for file in files:
			file_path_to_upload = os.path.join(root, file)
			object_path = os.path.relpath(file_path_to_upload, DIST_PATH).replace("\\", "/")
			s3_client.upload_file(file_path_to_upload, bucket_name, object_path, ExtraArgs=PUBLIC_READ)
	print("Finished uploading.")
	return

def invalidate_distribution(credentials):
	print("Invaliding distribution...")
	cloudfront_client = boto3.client(
		service_name="cloudfront",
		aws_access_key_id = credentials.get("id"),
		aws_secret_access_key = credentials.get("secret")
	)
	response = cloudfront_client.create_invalidation(
		DistributionId=credentials.get("distribution_id"),
		InvalidationBatch={
			"Paths": {
				"Quantity": 1,
				"Items": ["/*"]
			},
			"CallerReference": str(round(datetime.timestamp(datetime.now())))
		}
	)
	print(response)
	print("Finished invalidating.")
	return

def deploy_production(invalidate=True):
	credentials, has_required_vars = register_credentials()
	if has_required_vars:
		upload_s3(credentials)
		if invalidate:
			invalidate_distribution(credentials)
	return

if __name__=="__main__":
	deploy_production()