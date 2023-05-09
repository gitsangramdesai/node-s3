const AWS = require('aws-sdk');
AWS.config.update({
    accessKeyId: 'yourAccessKeyId',
    secretAccessKey: 'yourSecretKey',
    region: 'ap-south-1',
    signatureVersion: 'v4'
});

const s3 = new AWS.S3()
const myBucket = 'yourBucketName'
const myKey = 'profilePic/sangram.jpg'
const signedUrlExpireSeconds = 60 * 5

const url = s3.getSignedUrl('getObject', {
    Bucket: myBucket,
    Key: myKey,
    Expires: signedUrlExpireSeconds
});

console.log(url);