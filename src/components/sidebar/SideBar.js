import React from "react";
import Card from "../../components/layout/Card";
import FlexColumnCenter from "../../components/layout/FlexColumnCenter";
import { flexStart } from "../../components/layout/className";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../Router";
import useModal from "../../modal/hooks/useModal";
import { AiOutlinePlusSquare, AiOutlineHome } from "react-icons/ai";
import styled from "styled-components";
import { instagram } from "../../asset/navbar";
import FlexRowCenter from "../layout/FlexRowCenter";
import Img from "../elem/Img";
import { CiLogout } from "react-icons/ci";
import { $removeToken } from "../../dataManager/myQueries";
import { useSelector } from "react-redux";
const SideBar = () => {
  const navigate = useNavigate();
  const { openModal } = useModal();
  const profileImg = useSelector(state=>state.user.profileImg)
  return (
    <Wrapper>
      <Card
        wd={"28rem"}
        hg={"100vh"}
        pd="5rem 2rem"
        border="1px solid var(--ig-elevated-separator)"
      >
        <FlexColumnCenter align={flexStart} justify={flexStart} gap="1rem">
          <FlexRowCenter justify="flex-start" pd="0 1rem">
            <img
              style={{ cursor: "pointer", marginBottom: "2rem" }}
              className="insta-logo"
              alt=""
              src={instagram}
            />
          </FlexRowCenter>
          <Card type="sideBarItem">
            <FlexRowCenter
              type="side-nav-wrap"
              onClick={() => navigate(PATH.main)}
            >
              <AiOutlineHome size={30} />
              <h2>홈</h2>
            </FlexRowCenter>
          </Card>
          <Card type="sideBarItem">
            <FlexRowCenter
              type="side-nav-wrap"
              onClick={() => openModal({ type: "addPost" })}
            >
              <AiOutlinePlusSquare size={30} />
              <h2>만들기</h2>
            </FlexRowCenter>
          </Card>
          <Card type="sideBarItem">
            <FlexRowCenter type="side-nav-wrap"
             
            >
              <Img
                type="circle-profile"
                wd={"3rem"}
                hg={"3rem"}
                src={profileImg}
              />
              <h2>프로필</h2>
            </FlexRowCenter>
          </Card>
          <Card type="sideBarItem">
            <FlexRowCenter
              type="side-nav-wrap"
              onClick={() => {
                $removeToken();
                navigate(PATH.signIn);
              }}
            >
              <CiLogout size={30} />
              <h2>로그아웃</h2>
            </FlexRowCenter>
          </Card>
        </FlexColumnCenter>
      </Card>
    </Wrapper>
  );
};

export default SideBar;
const Wrapper = styled.div`
  .insta-logo {
    height: 4rem;
    width: 10rem;
  }
`;
