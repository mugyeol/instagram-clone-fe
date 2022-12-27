import uuid from "react-uuid";
import AWS from "aws-sdk";
import {
  ACCESS_KEY,
  SECRET_ACCESS_KEY,
  S3_BUCKET,
} from "./apiVariables";

export function uploadBase64ToS3(imgBase64) {
  const KEY = uuid();
  window.Buffer = window.Buffer || require("buffer").Buffer;
  
  // base64 인코딩
  const base64Data = new Buffer.from(
    imgBase64.replace(/^data:image\/\w+;base64,/, ""),
    "base64"
  ); 

  //타입 설정
  const imageType = imgBase64.split(";")[0].split("/")[1]; 

  //AWS 설정
  AWS.config.update({
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
  });
  return new AWS.S3.ManagedUpload({
    params: {
      Bucket: S3_BUCKET,
      Key: `${KEY}.${imageType}`,
      Body: base64Data,
    },
  }).promise();
}
export function uploadFileToS3(file) {
  const KEY = uuid();
  const TYPE = file.type.split('/')[1]  
  //AWS 설정
  AWS.config.update({
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
  });
  return new AWS.S3.ManagedUpload({
    params: {
      Bucket: S3_BUCKET,
      Key: `${KEY}.${TYPE}`,
      Body: file,
    },
  }).promise();
}