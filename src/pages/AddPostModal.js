import React from "react";
import styled from "styled-components";
import { homeIcon } from "../asset/navbar";
import { IconImg } from "../components/ui/elem/IconImg";
import PrimaryButton from "../components/ui/elem/PrimaryButton";
import { flexCenter } from "../components/ui/layout/className";
import FlexColumn from "../components/ui/layout/FlexColumn";
import FlexRow from "../components/ui/layout/FlexRow";
import { addPostMsg } from "../dataManager/messageVariables";

const AddPostModal = () => {
  return (
    <Fragment>
      <div className="backdrop" />
      {/* <ModalWrapper> */}
        <ModalCard>
          <FlexColumn>
            <FlexRow align={flexCenter}>
              <span>{addPostMsg.addNewPost}</span>
            </FlexRow>
            <FlexColumn justify={flexCenter} align={flexCenter}>
              <IconImg wd={'5rem'} hg={'5rem'} src={homeIcon}/>
              <h1>{addPostMsg.requestPhoto}</h1>
              <PrimaryButton>{addPostMsg.uploadButtonText}</PrimaryButton>
            </FlexColumn>
          </FlexColumn>
        </ModalCard>
      {/* </ModalWrapper> */}
    </Fragment>
  );
};

export default AddPostModal;

const Fragment = styled.div`
  .backdrop {
    width: 100%;
    height: 100vh;
    z-index: 10;
    background: rgba(0, 0, 0, 0.75);
  }
`;
// const ModalWrapper = styled.div`
//   display: flex;
//   width: 100%;
//   height: 100vh;
//   align-items: center;
//   justify-content: center;
//   background-color: rgba(0, 0, 0, 0.75);
//   margin: 5rem;

// `;
const ModalCard = styled.div`
  width: 60rem;
  height: 60rem;
  border-radius: 5px;
  z-index: 100;
  overflow: hidden;
`;
