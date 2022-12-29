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
import styled from "styled-components";
import SelectedImages from "./SelectedImages";
import { useDispatch, useSelector } from "react-redux";
import {
  __addPost,
  __uploadPost,
  __postUploaded,
} from "../../redux/modules/postSlice";
const AddPostImg = (props) => {
  const navigate = useNavigate();
  const { openModal, closeModal } = useModal();
  const { isLoading } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [form, setForm] = useState({ contents: "", imgList: [] });
  const [loadingState, setIsLoading] = useState(false);
  console.log("form", form);

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
    if (form.contents === "") return alert("내용을 입력해주세요");
    setIsLoading(true);
    uploadBase64ToS3(props.base64).then((data) => {
      const imgList = [{ postingImgNum: 1, postingImg: data.Location }];
      const formData = {
        contents: form.contents,
        imgList: imgList,
      };
      dispatch(__uploadPost(formData));
      if (!isLoading) {
        setIsLoading(false)
        closeModal();
        
      }
// openModal({type:'alert'})
        // alert("게시물 작성이 완료되었습니다");
    
    });
  };
  return (
    <ModalWrapper type="addPostImg">
      <FlexColumnCenter type="full-height">
        <FlexRowCenter type="add-header">
          <div>
            <BsArrowLeft
              style={{ cursor: "pointer" }}
              onClick={() => openModal({type:'alert'})}
              size={30}
            />
          </div>
          <h2>새 게시물 만들기</h2>
          <TextButton
            disabled={form.imgList.length > 0}
            onClick={onSubmitHandler}
            type="primary"
          >
            공유하기
          </TextButton>
        </FlexRowCenter>
        {/* //content */}
        <StGrid>
          {/* images */}
          <SelectedImages base64={props.base64} />
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
        </StGrid>
      </FlexColumnCenter>
      {/* {loadingState ? <Overlay>로딩중...</Overlay> : null} */}
      {loadingState ? (
        <Overlay>
          <Spinner/>
          {/* <div className="ids-dual-ring"></div> */}
        </Overlay>
      ) : null}
    </ModalWrapper>
  );
};

export default AddPostImg;
const StGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const Spinner = styled.div`
    display: inline-block;
    width: 80px;
    height: 80px;

    &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
const Overlay = styled.div`
  font-size: 2rem;
  position: fixed;
  top: 50%;
  padding: 2rem;
  left: 50%;
  z-index: 100000;
  border-radius:10px;
  transform: translate(-50%, -50%);
  background-color: rgb(0, 0, 0, 0.5);
`;
