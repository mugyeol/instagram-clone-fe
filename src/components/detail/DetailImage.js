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
          key={img.posingImgNum}
          type="detail-image"
          src={img.postingImg}
        />
      ))}
    </FlexColumnCenter>
  );
}

export default DetailImage;
