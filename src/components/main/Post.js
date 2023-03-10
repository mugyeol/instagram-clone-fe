import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../layout/Card";
import FlexColumn from "../layout/FlexColumn";
import { AiFillHeart, AiOutlineHeart, AiFillSmile } from "react-icons/ai";
import { IoPaperPlaneOutline, IoChatbubbleOutline } from "react-icons/io5";
import { FiBookmark } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {  __getInsta } from "../../redux/modules/postSlice";
import { __postLike } from "../../redux/modules/likeSlice";
import useModal from "../../modal/hooks/useModal";
import { deleteMsg } from "../../dataManager/messageVariables";
import { handleContent } from "../../lib/ContentHandler";

const Post = () => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.post.postList);
  const nickname = useSelector((state) => state.user.nickname);
  console.log("nickname", nickname);
  const isNewUpload = useSelector((state) => state.post.isNewUpload);

  console.log("isNewUpload", isNewUpload);
  const [like, setLike] = useState(false);
  const { openModal } = useModal();
  const onClick = (data) => {
    console.log(data);
    dispatch(__postLike(data));
    setLike(!like);
  };

  useEffect(() => {
    dispatch(__getInsta());
  }, [dispatch, isNewUpload]);

  return (
    <Fragment>
      {postList.map((post, index) => (
        <Card
          type="post"
          key={index}
          border="1px solid var(--ig-elevated-separator)"
        >
          <FlexColumn>
            <div className="post">
              <div className="info">
                <div className="user">
                  <div className="profile-pic">
                    <img
                      alt=""
                      style={{
                        height: "32px",
                        width: "32px",
                        borderRadius: "70%",
                        objectFit: "cover",
                      }}
                      src={post.profileImg}
                    />
                  </div>
                  <p className="username">{post.nickname}</p>
                </div>
                {post.nickname === nickname ? (
                  <div
                    style={{ cursor: "pointer", color: "var(--ig-color-red)" }}
                    onClick={() =>
                      openModal({
                        type: "alert",
                        props: { ...deleteMsg, postId: post.id },
                      })
                    }
                  >
                    ??????
                  </div>
                ) : null}
              </div>
              <img
                onClick={() =>
                  openModal({ type: "detail", props: { id: post.id } })
                }
                className="post-image"
                src={post.imgList[0]?.postingImg}
                alt=""
              />
              <div className="post-content">
                <div className="reaction-wrapper">
                  <div onClick={() => onClick(post.id)}>
                    {post.postingLike ? (
                      <AiFillHeart
                        className="bts"
                        style={{
                          filter: "var(--ig-heartfill-filter)",
                          width: "30",
                          height: "30",
                        }}
                      />
                    ) : (
                      <AiOutlineHeart
                        style={{ width: "30", height: "30" }}
                        className="bts"
                      />
                    )}
                  </div>
                  <button>
                    <IoChatbubbleOutline
                      onClick={() =>
                        openModal({ type: "detail", props: { id: post.id } })
                      }
                      style={{ width: "24", height: "24" }}
                    />
                  </button>
                  <button>
                    <IoPaperPlaneOutline
                      style={{ width: "24", height: "24" }}
                    />
                  </button>
                  <button className="btn4">
                    <FiBookmark style={{ width: "24", height: "24" }} />
                  </button>
                </div>
                <p className="likes">????????? {post.likeCount} ???</p>
                <div className="description">
                  <StDiv>
                  <span>{post.nickname} </span> {post.contents && handleContent(post.contents)}
                  </StDiv>
                </div>
              </div>
              <div className="comment-wrapper">
                <button>
                  <AiFillSmile className="smile" size={30} />
                </button>
                <input
                  type="text"
                  className="comment-box"
                  placeholder="?????? ??????..."
                />
                <button className="comment-btn">post</button>
              </div>
            </div>
          </FlexColumn>
        </Card>
      ))}
    </Fragment>
  );
};

export default Post;
const StDiv = styled.div`

    width: 85%;
    overflow: hidden;
    word-break: break-all;
    margin: auto 0;
`;
const Fragment = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--ig-primary-bacground);
  gap: 2rem;

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
    border: transparent;
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
    border-top: 1px solid var(--ig-elevated-background);
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

  .reaction-wrapper > button {
    align-items: center;
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: 8px;
    filter: invert(100%);
  }

  .reaction-wrapper > button :hover {
    fill: var(--ig-elevated-separator);
  }

  .reaction-wrapper .button.save {
    margin-left: auto;
  }

  .btn4 {
    border: 0;
    display: inline-block;
    font: inherit;
    font-size: 100%;
    margin: 0;
    margin-left: auto;
    margin-right: -10px;
    padding: 0;
    vertical-align: baseline;
  }

  .comment-wrapper > button {
    align-items: center;
    background: transparent;
    border: none;
    display: flex;
    justify-content: center;
    padding: 8px;
    filter: invert(0%);
  }

  .comment-wrapper > button:hover {
    fill: var(--ig-elevated-separator);
  }

  .smile {
    width: 24px;
    height: 24px;
    filter: var(--ig-elevated-sp-filter);
  }

  .bts {
    width: 24;
    height: 24;
    align-items: center;
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
  }

  .bts :hover {
  }
`;
