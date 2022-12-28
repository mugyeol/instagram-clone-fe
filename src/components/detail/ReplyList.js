import React from "react";
import ScrollDiv from "../layout/ScrollDiv";
function ReplyList() {
  const arr = new Array(50).fill("dummyReplies1dummyReplies2dummyReplies3dummyReplies4dummyReplies5dummyRepliesdummyReplies1dummyReplies2dummyReplies3dummyReplies4dummyReplies5dummyReplies");
  return (
    <ScrollDiv>
      {/* {arr.map((dummy) => ( */}
        <p>{arr[0]}</p>
      {/* ))} */}
    </ScrollDiv>
  );
}

export default ReplyList;
