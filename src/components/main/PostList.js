import React from "react";
import Post from "./Post";
import styled from "styled-components";
import { StFlexColumn } from "../../components/ui/layout/FlexColumn";
import FlexColumn from "../../components/ui/layout/FlexColumn";
import { storyMock } from "../../asset/main";
import Card from "../ui/layout/Card";

const PostList = () => {
  const arr = new Array(100).fill("mock data");
  console.log(arr);
  return (
    <FlexColumn gap={"2rem"}>
      {arr.map((mock, index) => (
        <Post key={index} />
      ))}
    </FlexColumn>
  );
};

export default PostList;

const MyColumn = styled(StFlexColumn)`
  /* gap: 1rem; */
`;
