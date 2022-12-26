import React from "react";
import styled from "styled-components";
import Card from "../../components/ui/layout/Card";
import FlexColumn from "../../components/ui/layout/FlexColumn";
const Post = () => {
  return (
    <Card pd="1rem" border="1px solid var(--ig-elevated-separator)">
      <FlexColumn>mock data</FlexColumn>
    </Card>
  );
};

export default Post;
const Fragment = styled.div`
  .test{}

`
// 현재의 FlexColum, FlexRow, Card에 props추가 해야하는 경우 