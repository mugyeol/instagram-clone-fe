import React, { useState } from "react";
import styled from "styled-components";
import Card from "../../components/ui/layout/Card";
import FlexColumn from "../../components/ui/layout/FlexColumn";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { IoPaperPlaneOutline, IoChatbubbleOutline } from "react-icons/io5";

const Post = () => {
  return (
    <Fragment>
      <Card border="1px solid var(--ig-elevated-separator)">
        <FlexColumn>
          <div className="post">
            <div className="info">
              <div className="user">
                <div className="profile-pic">
                  <img
                    style={{
                      height: "32px",
                      width: "32px",
                      borderRadius: "70%",
                      objectFit: "cover",
                    }}
                    src="https://w.namu.la/s/3e2618339413fcba4214fd1fe2dd593dadb5466ffbd375b9522e26c58648cb71350fb0a925f25ad39dad1f6c1bdd72d9b02673d1aada5530d6a979f51e60b5cdeff30ac82f789ad4f9b3ea8e8ebf49338f1c1059624da738c6eea1ce9da1572f"
                  />
                </div>
                <p className="username">hm_son7</p>
              </div>
              <img src="img/option.PNG" className="options" alt="" />
            </div>
            <img
              src="https://w.namu.la/s/2b1a2f3bbc967046f46bf38d5a87efed1103cb11567c7749339ac3e139407312c0e3e8ff6c19a7bafe8a37b83961094e75a4313da9d4dff64b1c82fdd988ebdac78dd5f3622ef9b324d2f043335ba7ae0fb7e8065c0ab358052f2b0a33ed3988"
              className="post-image"
              alt=""
            />
            <div className="post-content">
              <div className="reaction-wrapper">
                <button className="btn1">
                  <AiOutlineHeart style={{ width: "24", height: "24" }} />
                </button>
                <button>
                  <IoChatbubbleOutline style={{ width: "24", height: "24" }} />
                </button>
                <button>
                  <IoPaperPlaneOutline style={{ width: "24", height: "24" }} />
                </button>
              </div>
              <p className="likes">좋아요 1,012 개</p>
              <p clclassNamess="description">
                <span>hm_son7 </span> 국민 여러분들 덕분에 이렇게 재밋는 축구를
                할수 있어서 감사합니다 사랑합니다!!! 대한민국!!!
              </p>
              {/* <p class="post-time">2 minutes ago</p> */}
            </div>
            <div className="comment-wrapper">
              <button src="img/smile.PNG" class="icon" alt="" />
              <input
                type="text"
                className="comment-box"
                placeholder="댓글 달기..."
              />
              <button className="comment-btn">post</button>
            </div>
          </div>
        </FlexColumn>
      </Card>
    </Fragment>
  );
};

export default Post;

const Fragment = styled.div`
  .post {
    width: 100%;
    height: 100%;
  }

  .info {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    color: white;
  }

  .info .username {
    width: auto;
    font-weight: bold;
    font-size: 14px;
    margin-left: 10px;
  }

  .info .options {
    height: 10px;
    cursor: pointer;
  }

  .info .user {
    display: flex;
    align-items: center;
  }

  .info .profile-pic {
    padding: 0;
    background: none;
  }

  .info .profile-pic img {
    border: none;
  }

  .post-image {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }

  .post-content {
    width: 100%;
    padding: 20px;
  }

  .likes {
    font-weight: bold;
  }

  .description {
    margin: 10px 0;
    font-size: 14px;
    line-height: 20px;
  }

  .description span {
    font-weight: bold;
    margin-right: 10px;
  }

  .post-time {
    font-size: 12px;
    color: white;
  }

  .comment-wrapper {
    width: 100%;
    height: 50px;
    border-radius: 1px solid;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgb(38, 38, 38);
  }

  .comment-wrapper .icon {
    height: 30px;
    border-radius: 2px white;
  }

  .comment-wrapper > input {
    background-color: var(--ig-elevated-separator #363636);
  }

  .comment-box {
    width: 80%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 14px;
    background-color: transparent;
  }

  .comment-btn,
  .action-btn {
    width: 70px;
    height: 100%;
    background: none;
    border: none;
    outline: none;
    text-transform: capitalize;
    font-size: 16px;
    color: rgb(0, 162, 255);
    opacity: 0.5;
  }

  .reaction-wrapper {
    width: 100%;
    height: 50px;
    display: flex;
    margin-top: -20px;
    align-items: center;
  }

  .reaction-wrapper .button {
    height: 25px;
    margin: 0;
    margin-right: 20px;
    width: 25px;
    height: 25px;
    background-color: var(--ig-primary-logo);
  }

  .reaction-wrapper > button {
    align-items: center;
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: 8px;
  }

  .reaction-wrapper .button.save {
    margin-left: auto;
  }
`;
// 현재의 FlexColum, FlexRow, Card에 props추가 해야하는 경우
