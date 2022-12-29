import React from "react";
import Post from "./Post";
import styled from "styled-components";
import { StFlexColumn } from "../../components/layout/FlexColumn";
import FlexColumn from "../../components/layout/FlexColumn";

const PostList = () => {
  return (
    <FlexColumn gap={"2rem"}>
        <Post />
    </FlexColumn>
  );
};

export default PostList;

