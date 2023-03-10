import React, { useEffect } from "react";
import styled from "styled-components";
import FlexColumnCenter from "../layout/FlexColumnCenter";
import ModalWrapper from "../../modal/Modal";
import HeaderProfile from "./HeaderProfile";
import { flexStart } from "../layout/className";
import Content from "./Content";
import IconButtonGroup from "./IconButtonGroup";
import LikeCount from "./LikeCount";
import TimeAgo from "./TimeAgo";
import AddComment from "./AddComment";
import { useDispatch } from "react-redux";
import { __getPostDetail } from "../../redux/modules/detailSlice";
import DetailImage from "./DetailImage";
const Detail = (props) => {

  const dispatch = useDispatch()
  useEffect(()=>{
    console.log('useEffect go has id ?',props.id)
    dispatch(__getPostDetail(props.id) )
  },[])
  return (
    <ModalWrapper type="detail">
      <StGrid>
        {/* detail image */}
        <DetailImage/>
        <FlexColumnCenter
          style={{ border: "1px solid var(--ig-elevated-separator)" }}
          justify={flexStart}
        >
          {/* profile */}
          <HeaderProfile />
          {/* content and replies */}
          <FlexColumnCenter type="content-replies">
            <Content/>
          </FlexColumnCenter>
          {/* button group */}
          <IconButtonGroup postId={props.id}/>
          {/* like count / time ago */}
          <FlexColumnCenter gap="1rem" pd="0 var(--ig-post-padding) var(--ig-post-padding) ">
            <LikeCount />
            <TimeAgo />
          </FlexColumnCenter>
          <AddComment postId={props.id} />
        </FlexColumnCenter>
      </StGrid>
    </ModalWrapper>
  );
};

export default Detail;

const StGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 0.8fr;
`;
