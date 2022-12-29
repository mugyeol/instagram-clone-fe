import React from "react";
import { useDispatch } from "react-redux";
import useModal from "../../modal/hooks/useModal";
import ModalWrapper from "../../modal/Modal";
import { __deletePost } from "../../redux/modules/postSlice";
import TextButton from "../elem/TextButton";
import FlexColumnCenter from "../layout/FlexColumnCenter";

function AlertModal(props) {
  const dispatch = useDispatch();

  const padding1 = "2rem";
  const padding2 = "1.6rem";
  const padding3 = "1rem";
  const border = "1px solid var(--ig-elevated-separator)";

  const {closeModal} = useModal()
  return (
    <ModalWrapper type="alert">
      <FlexColumnCenter type="full-height">
        <FlexColumnCenter
          style={{ borderBottom: border }}
          gap={padding3}
          pd={padding1}
        >
          <h1 style={{ fontSize: "1.8rem", fontWeight: 600 }}>
            {props.mainMsg}
          </h1>
          <h3 style={{ color: "var(--ig-third-text", fontWeight: 400 }}>
            {props.subMsg}
          </h3>
        </FlexColumnCenter>
        <FlexColumnCenter style={{ borderBottom: border }} pd={padding2}>
          <TextButton
            onClick={() => {
              dispatch(__deletePost({ postId: props.postId }));
              closeModal()
            }}
            style={{ color: "var(--ig-color-red)" }}
          >
            {props.confirm}
          </TextButton>
        </FlexColumnCenter>
        <FlexColumnCenter pd={padding2}>
          <TextButton
          onClick = {()=>{
            closeModal()
          }}
          >{props.cancel}</TextButton>
        </FlexColumnCenter>
      </FlexColumnCenter>
    </ModalWrapper>
  );
}

export default AlertModal;
