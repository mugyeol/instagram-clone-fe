import React from "react";
import FlexRowCenter from "../layout/FlexRowCenter";
import { iconSize } from "./IconButtonGroup";
import { VscSmiley } from "react-icons/vsc";
import Textarea from "../elem/Textarea";
import TextButton from "../elem/TextButton";
import { useDispatch, useSelector } from "react-redux";
import { __typeComment } from "../../redux/modules/detailSlice";
import { __submitComment } from "../../redux/modules/detailSlice";

function AddComment({postId}) {
  const dispatch = useDispatch()
  const commentState = useSelector(state=>state.detail.comment)


  const onChangeHandler = (e)=>{
    dispatch(__typeComment(e.target.value))
  }
  const onsubmitHandler = (e)=>{
    dispatch(
      __submitComment({ postId: postId, comment: { comment: commentState } })
    );  }
  return (
    <FlexRowCenter type="post-add-comment">
      <VscSmiley style={{ margin: "var(--ig-post-padding)" }} size={iconSize} />
      <Textarea value={commentState} onChange={onChangeHandler} type="comment" placeholder="댓글 달기..." />
      <TextButton
        onClick = {onsubmitHandler}
        style={{ margin: "var(--ig-post-padding)" }}
        disabled={commentState === ''}
        type="addComment"
      >
        게시
      </TextButton>
    </FlexRowCenter>
  );
}

export default AddComment;
