import React, { useRef } from "react";
import PrimaryButton from "../../components/ui/elem/PrimaryButton";
import FlexColumnCenter from "../../components/ui/layout/FlexColumnCenter";
import FlexRowCenter from "../../components/ui/layout/FlexRowCenter";
import { addPostMsg } from "../../dataManager/messageVariables";
import { addPostIcon } from "../../asset/addpost";
import ModalWrapper from "../../modal/Modal";
import { uploadFileToS3 } from "../../dataManager/imageQueries";
import useModal from "../../modal/hooks/useModal";
import { s3Url } from "../../dataManager/apiVariables";
import { BsArrowLeft } from "react-icons/bs";
const AddPost = () => {
  const inputRef = useRef(null);
  const { openModal, closeModal } = useModal();
  const onChangeFileHandler = (e) => {
    let reader = new FileReader();
    openModal({type:'addPostImg'})
    // uploadFileToS3(e.target.files[0])
    //   .then((data) => {
    //     data.Location &&
    //       openModal({ type: "addPostImg", props: {url:data.Location} });
    //   })
    //   .catch((err) => console.log("err", err));
    // if (e.target.files[0]) {
    //   reader.readAsDataURL(e.target.files[0]);
    // }
  };

  return (
    <ModalWrapper type="addPost">
      <FlexColumnCenter type="full-height">
        <FlexRowCenter type="add-header">
          <div></div>
          <h2 style={{ marginLeft: "1.5rem" }}>{addPostMsg.addNewPost}</h2>
          <div></div>
        </FlexRowCenter>

        <FlexColumnCenter type="add-body">
          <img
            alt="addpostIcon"
            style={{ width: "10rem", height: "7rem" }}
            src={addPostIcon}
          />
          <h1>{addPostMsg.requestPhoto}</h1>
          <input
            ref={inputRef}
            style={{ display: "none" }}
            type="file"
            multiple
            onChange={onChangeFileHandler}
          />
          <PrimaryButton type="file" onClick={() => inputRef.current.click()}>
            {addPostMsg.uploadButtonText}
          </PrimaryButton>
        </FlexColumnCenter>
      </FlexColumnCenter>
    </ModalWrapper>
  );
};

export default AddPost;
