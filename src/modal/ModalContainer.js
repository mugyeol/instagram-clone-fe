import React from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { modalSelector } from "../redux/modules/modalSlice";
import Detail from "../components/detail/Detail";
import AddPost from "../components/addPost/AddPost";
import AddPostImg from "../components/addPost/AddPostImg";

const MODAL_COMPONENTS = {
  addPost: AddPost,
  detail: Detail,
  addPostImg: AddPostImg,
};

function ModalContainer() {
  const { type, props } = useSelector(modalSelector);
 console.log('props', props)

  if (!type) {
    return null;
  }

  const ModalComponent = MODAL_COMPONENTS[type];
  return createPortal(
    <>
      <ModalComponent {...props} />
    </>,
    document.getElementById("modal")
  );
}

export default ModalContainer;
