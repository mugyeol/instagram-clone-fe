import React from "react";
import styled from "styled-components";
import FlexColumnCenter from "../layout/FlexColumnCenter";
import Img from "../elem/Img";
import ModalWrapper from "../../modal/Modal";
import HeaderProfile from "./HeaderProfile";
import { flexStart } from "../layout/className";
import ReplyList from "./ReplyList";
const Detail = () => {
  return (
    <ModalWrapper type="detail">
      <StGrid>
        <FlexColumnCenter style={{borderRight:'1px solid var(--ig-elevated-separator)'}} type='full-height' pd="2.5rem 0">
            <Img
              type="detail-image"
              src="https://hanghaecatsanddogs.s3.ap-northeast-2.amazonaws.com/0b373c5d-fa78-6cbd-fbf5-a20f9b5a4847.jpeg"
            />
        </FlexColumnCenter>
        <FlexColumnCenter justify={flexStart}>
          <HeaderProfile/>
          <FlexColumnCenter type='replies'>
            <ReplyList/>
          </FlexColumnCenter>
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
  grid-template-columns: 1fr 1fr;
`;
