import React from "react";
import ModalWrapper from "../../modal/Modal";
import TextButton from "../elem/TextButton";
import FlexColumnCenter from "../layout/FlexColumnCenter";

function AlertModal() {
  const padding1 = "2rem";
  const padding2 = "1.6rem";
  const padding3 = "1rem";
  const border = "1px solid var(--ig-elevated-separator)";
  return (
    <ModalWrapper type="alert">
      <FlexColumnCenter type="full-height">
        <FlexColumnCenter
          style={{ borderBottom: border }}
          gap= { padding3 }
          pd={padding1}
        >
          <h1 style={{ fontSize: "1.8rem", fontWeight: 600 }}>
            게시물을 삭제하시겠어요?
          </h1>
          <h3 style={{ color: "var(--ig-third-text", fontWeight: 400 }}>
            지금 나가면 수정 내용이 저장되지 않습니다.
          </h3>
        </FlexColumnCenter>
        <FlexColumnCenter style={{ borderBottom: border }} pd={padding2}>
          <TextButton style={{ color: "var(--ig-color-red)" }}>삭제</TextButton>
        </FlexColumnCenter>
        <FlexColumnCenter pd={padding2}>
          <TextButton >취소</TextButton>
        </FlexColumnCenter>
      </FlexColumnCenter>
    </ModalWrapper>
  );
}

export default AlertModal;
