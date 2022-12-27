import React, { useState } from "react";
import FlexColumnCenter from "../../components/ui/layout/FlexColumnCenter";
import FlexRowCenter from "../../components/ui/layout/FlexRowCenter";
import { addPostMsg } from "../../dataManager/messageVariables";
import ModalWrapper from "../../modal/Modal";
import Img from "../ui/elem/Img";
import { BsArrowLeft } from "react-icons/bs";
import Textarea, { TEXTAREA_MAX_LENGTH } from "../ui/elem/Textarea";
import { profile } from "../../asset/navbar";
import { VscSmiley } from "react-icons/vsc";
import Span from "../ui/elem/Span";
import TextButton from "../ui/elem/TextButton";

const AddPostImg = (props) => {
  const [textState, setText] = useState("");

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setText(value);
  };

  return (
    <ModalWrapper type="addPostImg">
      <FlexColumnCenter type="full-height">
        <FlexRowCenter type="add-header">
          <div>
            <BsArrowLeft size={30} />
          </div>
          <h2>{addPostMsg.addNewPost}</h2>
          <TextButton type='primary'>
            {addPostMsg.toShare}
          </TextButton>
        </FlexRowCenter>
        <FlexRowCenter type="full-height">
          <FlexRowCenter wd="var(--ig-width-addpost-img-wrapper)" hg="100%">
            <Img src={props.url} type="addpost-image" />
          </FlexRowCenter>
          <FlexColumnCenter type="addpost-content">
            <FlexRowCenter gap="1rem">
              <Img type="circle-profile" src={profile} />
              <span style={{ flex: 1, fontWeight: 700 }}>htpadkorik</span>
            </FlexRowCenter>
            <Textarea value={textState} onChange={onChangeHandler} />
            <FlexRowCenter justify="space-between">
              <VscSmiley size={20} color="var(--ig-third-text)" />
              <div>
                <Span fs="1.2rem" color="var(--ig-third-text)">
                  {textState.length}
                </Span>
                <Span
                  fs="1.2rem"
                  color="var(--ig-third-text)"
                >{` / ${TEXTAREA_MAX_LENGTH}`}</Span>
              </div>
            </FlexRowCenter>
          </FlexColumnCenter>
        </FlexRowCenter>
      </FlexColumnCenter>
    </ModalWrapper>
  );
};

export default AddPostImg;
