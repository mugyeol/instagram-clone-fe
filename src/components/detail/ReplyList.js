import React from "react";
import { handleContent } from "../../lib/ContentHandler";
import ScrollDiv from "../layout/ScrollDiv";
import FlexRowCenter from "../layout/FlexRowCenter";
import { profile } from "../../asset/navbar";
import Img from "../elem/Img";
function ContentAndReplies() {
  const testArr = new Array(20).fill("test");
  const text =
    "dummyReplies1 #dummyReplies2 dummyReplies3dummyReplies4dummyReplies5dummyRepliesdummyReplies1dummyReplies2 @dummyReplies3 dummyReplies4dummyReplies5dummyReplies";
  return (
    <ScrollDiv>
        {testArr.map((test) => (
          <FlexRowCenter justify="flex-start" align="flex-start" gap="2rem">
            <Img wd="3.5rem" hg="3.5rem" type="circle-profile" src={profile} />
            <div className="content">
              <span style={{ fontWeight: 700, fontSize: "1.5rem" }}>
                nickname
              </span>{" "}
              {handleContent(text)}
            </div>
          </FlexRowCenter>
        ))}
    </ScrollDiv>
  );
}

export default ContentAndReplies;
