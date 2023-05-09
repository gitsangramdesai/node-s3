const AWS = require('aws-sdk');
const s3 = new AWS.S3({
    accessKeyId: 'youraccesskeyId',
    secretAccessKey: 'yoursecretAccessKey',
    region: 'ap-south-1'
});


var params = { Bucket: 'sangramdesai', Key: 'profilePic/sangram1.jpg' };

s3.deleteObject(params, function (err, data) {
    if (err) console.log(err, err.stack);  // error
    else console.log("File Deleted");     // deleted
});