function download(url, downloader) {
  console.log("started downloading from url", url);
  setTimeout(function exec() {
    console.log("download complete after 5 sec ");
    const content = "ABCDEF";
    downloader(content);
  }, 5000);
}
function writeFile(content, writter) {
  console.log("the downloaded file is ", content);
  setTimeout(function exec() {
    const fileName = "file.txt";
    console.log("writing the file in", fileName);
    writter(fileName);
  }, 5000);
}
function upload(url, file, uploader) {
  console.log("started uploading", file, "on", url);
  setTimeout(function up() {
    console.log("upload completed");
    const response = "SUCCESS";
    uploader(response);
  }, 2000);
}

download("www.xyz.com", function processDownload(content) {
  // console.log("the downloaded content is",content);
  console.log("we are now going to process the downloaded data");
  writeFile(content, function processWrite(fileName) {
    console.log(
      "we have now downloaded and written the file , now will upload"
    );
    upload("www.upload.com", fileName, function processUpload(response) {
      console.log("We have uploaded with", response);
    });
  });
});

// download("www.xyz.com", function process(content) {
//   console.log("downloaded data is", content);
// });

// writeFile("abcdef", function writter(name) {
//   console.log("file written with name", name);
// });

// upload("www.upload.com", "file.txt", function uploader(response) {
//   console.log("file uploaded with", response);
// });
