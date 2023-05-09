const fs = require('fs');
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
    accessKeyId: 'youraccessKeyId',
    secretAccessKey: 'yoursecretAccessKey'
});

var myBucket = 'yourBucketName';
var myKey = 'profilePic/4.jpg';


fs.readFile('4.jpg', function (err, data) {
    if (err) { throw err; }
    params = { Bucket: myBucket, Key: myKey, Body: data };
    s3.putObject(params, function (err, data) {
        if (err) {
            console.log(err)
        } else {
            console.log("Successfully uploaded data to myBucket/myKey");
        }
    });

});