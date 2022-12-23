import React from "react";
import Post from "./Post";
import FlexColumn from "../../ui/layout/FlexColumn";

const PostList = () => {
  const arr = new Array(10).fill("mock data");
  console.log(arr)
  return (
    <FlexColumn>
      {arr.map((mock, index) => (
        <Post key={index} />
      ))}
    </FlexColumn>
  );
};

export default PostList;

