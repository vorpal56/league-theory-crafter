import os
import pickle
import boto3
from datetime import datetime
from functools import wraps

APP_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
DIST_PATH = os.path.join(APP_PATH, "dist", "league-theory-crafter")
BACKEND_PATH = os.path.join(APP_PATH, "server")
DATA_PATH = os.path.join(BACKEND_PATH, "data")
CREDENTIALS_FILENAME = "aws_credentials"
CREDENTIALS_PATH = os.path.join(BACKEND_PATH, "src", CREDENTIALS_FILENAME)
OBJECT_BASE_PATHS = ["json", "json_combined_champion_cache"] # The paths to upload server data from
PUBLIC_READ = {'ACL': 'public-read'} # Object properties when uploading need to be public
REQUIRED_VARS = set(["id", "secret", "bucket_name", "distribution_id"]) # Tags defined in the credentials

def client_wrapper(resource_name):
	def wrapper_factory(calling_function):
		'''
		Wrapper factory for creating boto3 clients with resource_name as the resource to access on AWS
		Params:
			calling_function (func): The function that is wrapped by wrapper_factory
		Returns:
			(any): the result of the calling function with client (botocore.client) as a required parameter
		'''
		@wraps(calling_function)
		def wrapper(*args, **kwargs):
			credentials = kwargs.get("credentials")
			client = boto3.client(
				service_name=resource_name,
				aws_access_key_id = credentials.get("id"),
				aws_secret_access_key = credentials.get("secret")
			)
			return calling_function(client=client, *args, **kwargs)
		return wrapper
	return wrapper_factory

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
		if not has_required_vars:
			print(f"Credentials are not valid. Add {', '.join(var for var in missing_vars)} into the credentials.")
	return credentials, has_required_vars

@client_wrapper("s3")
def delete_old_objects(client, credentials):
	bucket_name = credentials.get("bucket_name")
	paginator = client.get_paginator("list_objects_v2") # list_objects_v2 has max return of 1000 keys
	pages = paginator.paginate(Bucket=bucket_name)
	for page in pages:
		s3_objects = page["Contents"]
		for s3_object in s3_objects:
			object_name = s3_object["Key"]
			if "/" not in object_name:
				client.delete_object(Bucket=bucket_name, Key=object_name)
	return

@client_wrapper("s3")
def upload_s3(client, credentials, skip_json):
	print("Uploading files to AWS...")
	bucket_name = credentials.get("bucket_name")
	# Upload the contents of server data from OBJECT_BASE_PATHS
	if not skip_json:
		for i, object_path_name in enumerate(OBJECT_BASE_PATHS):
			dir_path = os.path.join(DATA_PATH, object_path_name)
			for full_filename in os.listdir(dir_path):
				file_path_to_upload = os.path.join(dir_path, full_filename)
				if os.path.isfile(file_path_to_upload):
					object_name = "/".join([object_path_name, full_filename])
					client.upload_file(file_path_to_upload, bucket_name, object_name, ExtraArgs=PUBLIC_READ)

	# Upload the build by walking through the DIST_PATH (the location where the app is built)
	# Champion asset changes are more easily recognized since champions.py writes to assets_changed.pkl
	# Other asset changes like items, runes, and others should just be uploaded to S3 through the console instead
	changed_champion_assets_file_path = os.path.join(DATA_PATH, OBJECT_BASE_PATHS[0], "assets_changed.pkl")
	changed_champion_assets = set()
	if os.path.exists(changed_champion_assets_file_path):
		with open(changed_champion_assets_file_path, "rb") as changed_champion_assets_file_path:
			# Main issue here is the pkl file becomes empty if champions module is run more than once
			changed_champion_assets = pickle.load(changed_champion_assets_file_path)

	for root, _, files in os.walk(DIST_PATH):
		for file in files:
			file_path_to_upload = os.path.join(root, file)
			object_path = os.path.relpath(file_path_to_upload, DIST_PATH).replace("\\", "/")
			# This always skips assets unless it's a champions assets that have been changed
			# There are thousands of assets which can be expensive for every request
			if "champions" in object_path:
				object_paths = object_path.split("/")
				champion_assets_root = object_paths[3]
				# Skip assets that are not in the changed_champion_assets and upload assets that have been changed
				if champion_assets_root not in changed_champion_assets:
					continue
			client.upload_file(file_path_to_upload, bucket_name, object_path, ExtraArgs=PUBLIC_READ)
	print("Finished uploading.")
	return

@client_wrapper("cloudfront")
def invalidate_distribution(client, credentials):
	print("Invaliding distribution...")
	invalidation_items = ["/*"]
	response = client.create_invalidation(
		DistributionId=credentials.get("distribution_id"),
		InvalidationBatch={
			"Paths": {
				"Quantity": len(invalidation_items),
				"Items": invalidation_items
			},
			"CallerReference": str(round(datetime.timestamp(datetime.now())))
		}
	)
	print(response)
	print("Finished invalidating.")
	return

def deploy_production(credentials, invalidate=True, skip_json=True):
	upload_s3(credentials=credentials, skip_json=skip_json)
	if invalidate:
		invalidate_distribution(credentials=credentials)
	delete_old_objects(credentials=credentials)
	return

if __name__=="__main__":
	credentials, has_required_vars = register_credentials()
	if has_required_vars:
		deploy_production(credentials, invalidate=False)