import React from "react";
import FlexRowCenter from "../layout/FlexRowCenter";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IoChatbubbleOutline } from "react-icons/io5";
import { VscBookmark } from "react-icons/vsc";
import { FiSend } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { __liking } from "../../redux/modules/detailSlice";
export const iconSize = 25;

function IconButtonGroup({postId}) {
  const dispatch = useDispatch();
  const postingLike = useSelector(
    (state) => state.detail.postDetail.postingLike
  );
  console.log("isLiked", postingLike);

  return (
    <FlexRowCenter type="post-button-group">
      <FlexRowCenter gap="1rem" type="flex" justify="flex-start">
        {postingLike ? (
          <AiFillHeart
            onClick={() => dispatch(__liking({postId:postId, like:{ like: postingLike }}))}
            className="heart-fill"
            size={iconSize + 2}
          />
        ) : (
          <AiOutlineHeart
            onClick={() => dispatch(__liking({postId:postId, like:{ like: postingLike }}))}
            className="icon"
            size={iconSize + 2}
          />
        )}

        <IoChatbubbleOutline className="icon chat" size={iconSize} />
        <FiSend className="icon" size={iconSize - 2} />
      </FlexRowCenter>
      <VscBookmark className="icon" size={iconSize + 2} />
    </FlexRowCenter>
  );
}

export default IconButtonGroup;
