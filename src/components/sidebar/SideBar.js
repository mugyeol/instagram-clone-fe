import React from "react";
import Card from "../../components/ui/layout/Card";
import FlexColumn from "../../components/ui/layout/FlexColumn";
import { IconImg } from "../../components/ui/elem/IconImg";
import { homeIcon, profile } from "../../asset/navbar";
import FlexRow from "../../components/ui/layout/FlexRow";
import { flexCenter, flexStart } from "../../components/ui/layout/className";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../Router";
import { CircleImg } from "../ui/elem/CircleImg";
import { useDispatch } from "react-redux";
import { __openModal } from "../../redux/modules/modalSlice";
import useModal from "../../modal/hooks/useModal";
import { AiOutlinePlusSquare, AiOutlineHome } from "react-icons/ai";
import styled from "styled-components";
import { instagram } from "../../asset/navbar";
const SideBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { openModal } = useModal();
  return (
    <Wrapper>
      <Card
        wd={"28rem"}
        hg={"100vh"}
        pd="4rem 3rem"
        border="1px solid var(--ig-elevated-separator)"
      >
        <FlexColumn align={flexStart} gap="3rem">
          <img className="insta-logo" alt="" src={instagram} />
          <Card type='sideBar'>
            <FlexRow
              className="row"
              gap={"2rem"}
              justify={flexStart}
              align={flexCenter}
              onClick={() => navigate(PATH.main)}
            >
              <AiOutlineHome size={30} />
              <h2>홈</h2>
            </FlexRow>
          </Card>
          {/* <FlexRow gap={'2rem'} justify={flexStart} onClick={()=>navigate(PATH.main)}>
            <IconImg src={homeIcon}/>
            <h2>검색</h2>
        </FlexRow>
        <FlexRow gap={'2rem'} justify={flexStart} onClick={()=>navigate(PATH.main)}>
            <IconImg src={homeIcon}/>
            <h2>탐색 탭</h2>
        </FlexRow>AiOutlinePlusSquare
        <FlexRow gap={'2rem'} justify={flexStart} onClick={()=>navigate(PATH.main)}>
            <IconImg src={homeIcon}/>
            <h2>릴스</h2>
        </FlexRow>
        <FlexRow gap={'2rem'} justify={flexStart} onClick={()=>navigate(PATH.main)}>
            <IconImg src={homeIcon}/>
            <h2>메세지</h2>
        </FlexRow>
        <FlexRow gap={'2rem'} justify={flexStart} onClick={()=>navigate(PATH.main)}>
            <IconImg src={homeIcon}/>
            <h2>알림</h2>
        </FlexRow> */}
          <FlexRow
            className="row"
            gap={"2rem"}
            justify={flexStart}
            align={flexCenter}
            onClick={() => openModal({ type: "addPost" })}
          >
            <AiOutlinePlusSquare size={30} />
            {/* <IconImg src={homeIcon}/> */}
            <h2>만들기</h2>
          </FlexRow>
          <FlexRow className="row" gap={"2rem"} justify={flexStart}>
            <CircleImg wd={"2.5rem"} hg={"2.5rem"} src={profile} />
            <h2>프로필</h2>
          </FlexRow>
        </FlexColumn>
      </Card>
    </Wrapper>
  );
};

export default SideBar;
const Wrapper = styled.div`
  .row {
    cursor: pointer;
  }
  .insta-logo {
    height: 4rem;
    width: 10rem;
  }
`;
