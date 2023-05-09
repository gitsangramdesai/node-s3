const fs = require('fs');
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
    accessKeyId: 'youraccessKeyId',
    secretAccessKey: 'yoursecretAccessKey'
});

var params = {
    Bucket: 'yourBucketName', /* required */
    Prefix: 'profilePic'  // Can be your folder name
};

s3.listObjectsV2(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else {
        var fileList = []
        data.Contents.forEach((element, indx) => {
            fileList.push({
                "fileName": element.Key,
                "size": (element.Size/1024/1024) + " MB"
            })
        })
        console.log(fileList)
    }
});