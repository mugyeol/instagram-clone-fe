import React from "react";
import styled from "styled-components";
import Card from "../../ui/layout/Card";
import FlexColumn from "../../ui/layout/FlexColumn";
const Post = () => {
  return (
    <Fragment>
      <div className="test"></div>
    <Card pd="1rem" border="1px solid var(--ig-elevated-separator)">
      <FlexColumn>mock data</FlexColumn>
    </Card>
    </Fragment>
  );
};

export default Post;
const Fragment = styled.div`
  .test{}

`
// 현재의 FlexColum, FlexRow, Card에 props추가 해야하는 경우 