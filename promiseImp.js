function download(url) {
  return new Promise(function executor(resolve, reject) {
    console.log("started downloading from url", url);
    setTimeout(function exec() {
      console.log("completed download ");
      const content = "ABCDEF";
      resolve(content);
    }, 5000);
  });
}

function write(content) {
  return new Promise(function executor(resolve, reject) {
    console.log("the downloaded content is ", content);
    setTimeout(function exec() {
      console.log("writing the content in the file");
      const fileName = "file.txt";
      resolve(fileName);
    }, 5000);
  });
}

function upload(url, fileName) {
  console.log("the file ", fileName, "to be uploaded to url", url);
  return new Promise(function executor(resolve, reject) {
    setTimeout(function exec() {
      console.log("the file is being uploaded");
      const response = "SUCCESS";
      resolve(response);
    }, 3000);
  });
}
download("www.xyz.com")
  .then(function fulfillHandler(content) {
    console.log(
      "file downloaded with value",
      content,
      "and going to be uploaded"
    );
    return write(content);
  })
  .then(function fulfillHandler(fileName) {
    console.log("the data written in the file with name", fileName);
    return upload("www.upload.com", fileName);
  })
  .then(function fulfillHandler(response) {
    console.log("uploading completed with", response);
  });

// upload("www.upload.com", "file.txt").then(function fulfillHandler(value) {
//   console.log("uploading completed with", value);
// });

// write("ABCDEF").then(function fulfillHandler(fileName) {
//   console.log("file writing has been comleted in", fileName);
// });

// download("www.xyz.com")
// .then(function fulfillHandler(value){
//     console.log("Content downloaded is",value);
// })
