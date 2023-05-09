 How to Download File from S3 Bucket to Local Folder

    aws s3 cp s3://mybucketname/profilePic/sangram.jpg sangram1.jpg



How to List s3 bucket Folder

    aws s3 ls s3://mybucketname/profilePic/ --recursive --human-readable --summarize



How to Copy Local File to S3 Bucket

    aws s3 cp /home/sangram/developements/nodejs/node-s3/sangram1.jpg  s3://mybucketname/profilePic/