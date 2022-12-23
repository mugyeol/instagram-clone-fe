import React from "react";
import Post from "./Post";
import styled from 'styled-components';
import { StFlexColumn } from "../../ui/layout/FlexColumn";
import FlexColumn from "../../ui/layout/FlexColumn";

const PostList = () => {
  const arr = new Array(10).fill("mock data");
  console.log(arr)
  return (
    <FlexColumn style={{gap:'1rem'}}>
      {arr.map((mock, index) => (
        <Post key={index} />
      ))}
    </FlexColumn>
  );
};

export default PostList;

const MyColumn = styled(StFlexColumn)`
    /* gap: 1rem; */

`