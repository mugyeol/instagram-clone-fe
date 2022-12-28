import React, { useEffect, useState } from "react";
import FlexColumnCenter from "../../components/layout/FlexColumnCenter";
import FlexRowCenter from "../../components/layout/FlexRowCenter";
import { addPostMsg } from "../../dataManager/messageVariables";
import ModalWrapper from "../../modal/Modal";
import Img from "../elem/Img";
import { BsArrowLeft } from "react-icons/bs";
import Textarea, { TEXTAREA_MAX_LENGTH } from "../elem/Textarea";
import { profile } from "../../asset/navbar";
import { VscSmiley } from "react-icons/vsc";
import Span from "../elem/Span";
import TextButton from "../elem/TextButton";
import { $addPost } from "../../dataManager/myQueries";
import { uploadBase64ToS3 } from "../../dataManager/imageQueries";
import useModal from "../../modal/hooks/useModal";
import { useNavigate } from "react-router-dom";

const AddPostImg = (props) => {
  const navigate = useNavigate();
  const { closeModal } = useModal();

  const [form, setForm] = useState({ contents: "", imgList: [] });
  console.log("form", form);
  useEffect(() => {
    uploadBase64ToS3(props.base64).then((data) =>
      setForm((prev) => {
        return {
          ...prev,
          imgList: [{ postingImgNum: 1, postingImg: data.Location }],
        };
      })
    );
  }, []);


  const onChangeHandler = (e) => {
    const value = e.target.value;
    setForm((prev) => {
      return {
        ...prev,
        contents: value,
      };
    });
  };
  const onSubmitHandler = () => {
    $addPost(form)
      .then((res) =>
        res.status === 200 ? closeModal() : alert("alert" + res.message)
      )
      .catch((err) => {
        const status = err.response.status;
        if (status === 403) {
          alert('로그인 세션이 만료되었습니다.')
          closeModal()
          navigate("/sign-in");
        }
      });
  };
  return (
    <ModalWrapper type="addPostImg">
      <FlexColumnCenter type="full-height">
        <FlexRowCenter type="add-header">
          <div>
            <BsArrowLeft
              style={{ cursor: "pointer" }}
              onClick={() => closeModal()}
              size={30}
            />
          </div>
          <h2>{addPostMsg.addNewPost}</h2>
          <TextButton
            disabled={form.imgList.length > 0}
            onClick={onSubmitHandler}
            type="primary"
          >
            공유하기
          </TextButton>
        </FlexRowCenter>
        <FlexRowCenter type="full-height">
          <FlexRowCenter wd="var(--ig-width-addpost-img-wrapper)" hg="100%">
            <Img src={props.base64} type="addpost-image" />
          </FlexRowCenter>
          <FlexColumnCenter type="addpost-content">
            <FlexRowCenter gap="1rem">
              <Img type="circle-profile" src={profile} />
              <span style={{ flex: 1, fontWeight: 700 }}>htpadkorik</span>
            </FlexRowCenter>
            <Textarea value={form.contents} onChange={onChangeHandler} />
            <FlexRowCenter justify="space-between">
              <VscSmiley size={20} color="var(--ig-third-text)" />
              <div>
                <Span fs="1.2rem" color="var(--ig-third-text)">
                  {form.contents.length}
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
