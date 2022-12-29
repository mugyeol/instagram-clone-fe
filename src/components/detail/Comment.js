import React from "react";
import { profile } from "../../asset/navbar";
import { handleContent } from "../../lib/ContentHandler";
import Img from "../elem/Img";
import FlexRowCenter from "../layout/FlexRowCenter";

const Comment = ({ comment }) => {
  return (
    <FlexRowCenter justify="flex-start" align="flex-start" gap="2rem">
      <Img wd="3.5rem" hg="3.5rem" type="circle-profile" src={profile} />
      <div className="content">
        <span style={{ fontWeight: 700, fontSize: "1.5rem" }}>
          {comment.nickName}
        </span>{" "}
        {handleContent(comment.comment)}
      </div>
    </FlexRowCenter>
  );
};

export default Comment;
