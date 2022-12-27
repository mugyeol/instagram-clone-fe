// components/Modal/Modal

import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import useOutSideClick from "./hooks/useOutSideClick";
import useModal from "./hooks/useModal";

function Modal({ children }) {
  const modalRef = useRef(null)

  const {closeModal} = useModal()
  useOutSideClick(modalRef, closeModal)
  useEffect(() => {
    const $body = document.querySelector("body");
    const overflow = $body.style.overflow;
    $body.style.overflow = "hidden";
    return () => {
    	$body.style.overflow = overflow
    };
  }, []);
  return (
      <Overlay>
        <ModalWrap ref={modalRef}>
            {children}
        </ModalWrap>
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
`;

const ModalWrap = styled.div`
  width: 600px;
  height: 600px;
  border-radius: 5px;
  background-color: var(--ig-elevated-background);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


export default Modal;
