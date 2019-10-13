// // Load the SDK and UUID
// const AWS = require('aws-sdk');
// const uuid = require('uuid');
// require('dotenv').config();

// // Create unique bucket name
// const bucketName = 'node-sdk-sample-' + uuid.v4();
// // Create name for uploaded object key
// const keyName = 'hello_world.txt';

// // Create a promise on S3 service object
// AWS.config.update({
//   accessKeyId: process.env.aws_access_key_id,
//   secretAccessKey: process.env.aws_secret_access_key,
//   region: 'us-east-1'
// });

// const bucketPromise = new AWS.S3({ apiVersion: '2006-03-01' }).createBucket({ Bucket: bucketName }).promise();

// // Handle promise fulfilled/rejected states
// bucketPromise.then(
//   function (data) {
//     // Create params for putObject call
//     const objectParams = { Bucket: bucketName, Key: keyName, Body: 'Hello World!' };
//     // Create object upload promise
//     const uploadPromise = new AWS.S3({ apiVersion: '2006-03-01' }).putObject(objectParams).promise();
//     uploadPromise.then(
//       function (data) {
//         console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
//       });
//   }).catch(
//     function (err) {
//       console.error(err, err.stack);
//     });






























// function addPhoto(req, res, cb) {
//   var file = req.file;
//   var fileName = file.name;

//   var albumPhotosKey = encodeURIComponent(albumName) + "//";

//   // Use S3 ManagedUpload class as it supports multipart uploads
//   var upload = new AWS.S3.ManagedUpload({
//     params: {
//       Bucket: albumBucketName,
//       Key: photoKey,
//       Body: file,
//       ACL: "public-read"
//     }
//   });

//   var promise = upload.promise();

//   promise.then(
//     function (data) {
//       alert("Successfully uploaded photo.");
//       viewAlbum(albumName);
//     },
//     function (err) {
//       return alert("There was an error uploading your photo: ", err.message);
//     }
//   );
// }

// module.exports = addPhoto;

// // function addPhoto(albumName) {
// //   const files = document.getElementById("photoupload").files;
// //   if (!files.length) {
// //       return alert("Please choose a file to upload first.");
// //   }
// //   const file = files[0];
// //   const fileName = file.name;
// //   const albumPhotosKey = encodeURIComponent(albumName) + "//";

// //   const photoKey = albumPhotosKey + fileName;

// //   // Use S3 ManagedUpload class as it supports multipart uploads
// //   const upload = new AWS.S3.ManagedUpload({
// //       params: {
// //           Bucket: albumBucketName,
// //           Key: photoKey,
// //           Body: file,
// //           ACL: "public-read"
// //       }
// //   });

// //   const promise = upload.promise();

// //   promise.then(
// //       function (data) {
// //           alert("Successfully uploaded photo.");
// //           viewAlbum(albumName);
// //       },
// //       function (err) {
// //           return alert("There was an error uploading your photo: ", err.message);
// //       }
// //   );
// // }
