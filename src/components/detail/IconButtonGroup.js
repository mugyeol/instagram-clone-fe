import React from "react";
import FlexRowCenter from "../layout/FlexRowCenter";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IoChatbubbleOutline } from "react-icons/io5";
import { VscBookmark } from "react-icons/vsc";
import { FiSend } from "react-icons/fi";
export const iconSize = 25

function IconButtonGroup() {
  return (
    <FlexRowCenter type='post-button-group'>
      <FlexRowCenter gap='1rem' type="flex" justify="flex-start">
        <AiOutlineHeart className="icon" size={iconSize+2}/>
        {/* <AiFillHeart className="heart-fill" size={iconSize+2}/> */}
        <IoChatbubbleOutline className="icon chat" size={iconSize}/>
        <FiSend className="icon" size={iconSize-2}/>
      </FlexRowCenter>
      <VscBookmark className="icon" size={iconSize+2}/>
    </FlexRowCenter>
  );
}

export default IconButtonGroup;
