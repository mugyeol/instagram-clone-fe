import React from "react";
import FlexColumnCenter from "../layout/FlexColumnCenter";
import Img from "../elem/Img";
import { useSelector } from "react-redux";
function DetailImage() {
  const imageState = useSelector((state) => state.detail.imgList);
  console.log('imageState',imageState)

  return (
    <FlexColumnCenter type="full-height" pd="2.5rem 0">
      {imageState.map((img) => (
        <Img
          type="detail-image"
          src="https://hanghaecatsanddogs.s3.ap-northeast-2.amazonaws.com/0b373c5d-fa78-6cbd-fbf5-a20f9b5a4847.jpeg"
        />
      ))}
    </FlexColumnCenter>
  );
}

export default DetailImage;
