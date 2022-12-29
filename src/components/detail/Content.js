import React from "react";
import { handleContent } from "../../lib/ContentHandler";
import ScrollDiv from "../layout/ScrollDiv";
import FlexRowCenter from "../layout/FlexRowCenter";
import Img from "../elem/Img";
import { useSelector } from "react-redux";
function Content() {
  const comments = useSelector((state) => state.detail.comments);
  const postDetail = useSelector((state)=> state.detail.postDetail)
  console.log('comments',comments)

  return (
    <ScrollDiv>
      <FlexRowCenter justify="flex-start" align="flex-start" gap="2rem">
        <Img wd="3.5rem" hg="3.5rem" type="circle-profile" src={postDetail.profileImg} />
        <div className="content">
          <span style={{ fontWeight: 500, fontSize: "1.4rem" }}>{postDetail.nickname}</span>{" "}
          {postDetail.contents && handleContent(postDetail.contents)}
        </div>
      </FlexRowCenter>
      {comments.length >0 ?
        comments.map((comment) => (
          // todo: 모듈화 시키기
          // <Comment key={comment.commentId} comment={comment}/>
          <FlexRowCenter
           justify="flex-start" align="flex-start" gap="2rem">
          {console.log('hi')}
            <Img wd="3.5rem" hg="3.5rem" type="circle-profile" src={comment.profileImg} />
            <div className="content">
              <span style={{ fontWeight: 500, fontSize: "1.4rem" }}>
                {comment.nickName}
              </span>{" "}
              {postDetail.contents && handleContent(comment.comment)}
            </div>
          </FlexRowCenter>
        )): null
      }
    </ScrollDiv>
  );
}

export default Content;
