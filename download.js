const fs = require('fs');
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
    accessKeyId: 'youraccessKeyId',
    secretAccessKey: 'yoursecretAccessKey'
});

const params = {
    Bucket: "yourbucketname",
    Key: `profilePic/4.jpg`
};

s3.getObject(params, (err, data) => {
    if (err) console.error(err);
    fs.writeFileSync('./Downloads/4.jpg', data.Body);
    console.log("Image Downloaded.");
});