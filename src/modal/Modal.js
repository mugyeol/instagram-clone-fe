// components/Modal/Modal

import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import useOutSideClick from "./hooks/useOutSideClick";
import useModal from "./hooks/useModal";
import { RiCloseFill } from "react-icons/ri";

function ModalWrapper({ children, type = "addPost" }) {
  const modalRef = useRef(null);

  const { closeModal } = useModal();
  useOutSideClick(modalRef, closeModal);
  useEffect(() => {
    const $body = document.querySelector("body");
    const overflow = $body.style.overflow;
    $body.style.overflow = "hidden";
    return () => {
      $body.style.overflow = overflow;
    };
  }, []);

  const MODAL_WRAPPERS = {
    addPost: AddPostWrap,
    addPostImg: AddPostImgWrap,
    detail: DetailWrap,
  };

  const Wrapper = MODAL_WRAPPERS[type];

  return (
    <Overlay>
      <RiCloseFill
        onClick={() => closeModal()}
        className="close-icon"
        size={30}
        color={"var(--ig-primary-text)"}
      />
      <Wrapper ref={modalRef}>{children}</Wrapper>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.37);
  z-index: 9999;

  .close-icon {
    position: fixed;
    top: 1.2rem;
    right: 1.2rem;
    cursor: pointer;
  }
`;

const AddPostWrap = styled.div`
  width: var(--ig-width-addpost-img-wrapper);
  height: 60rem;
  border-radius: 5px;
  background-color: var(--ig-elevated-background);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const AddPostImgWrap = styled(AddPostWrap)`
  width: 95rem;
  height: 60rem;
`;
const DetailWrap = styled(AddPostWrap)`
  width: 65%;
  height: 85%;
  background-color: var(--ig-primary-background);
  border: 1px solid white;
  overflow: hidden;
`;
export default ModalWrapper;
