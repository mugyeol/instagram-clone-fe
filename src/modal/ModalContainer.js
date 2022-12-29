import React from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { modalSelector } from "../redux/modules/modalSlice";
import Detail from "../components/detail/Detail";
import AddPost from "../components/addPost/AddPost";
import AddPostImg from "../components/addPost/AddPostImg";
import AlertModal from "../components/alert/AlertModal";

const MODAL_COMPONENTS = {
  addPost: AddPost,
  detail: Detail,
  addPostImg: AddPostImg,
  alert:AlertModal
};

// function ModalContainer() {
//   const { type, props } = useSelector(modalSelector);

//   if (!type) {
//     return null;
//   }

//   const ModalComponent = MODAL_COMPONENTS[type];
//   return createPortal(
//     <>
//       <ModalComponent {...props} />
//     </>,
//     document.getElementById("modal")
//   );
// }
function ModalContainer() {
  const modalList = useSelector(modalSelector);

  const renderModal = modalList.map(({type,props})=> {
    const ModalComponent = MODAL_COMPONENTS[type]
    return <ModalComponent key={type} {...props}/>
  })


  return createPortal(
    <>
      {renderModal}
    </>,
    document.getElementById("modal")
  );
}

export default ModalContainer;
