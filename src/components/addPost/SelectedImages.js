import React from "react";
import FlexRowCenter from "../layout/FlexRowCenter";
import Img from "../elem/Img";
function SelectedImages(props) {
  return (
    <FlexRowCenter type='full-height'>
      <Img src={props.base64} type="addpost-image" />
    </FlexRowCenter>
  );
}

export default SelectedImages;
