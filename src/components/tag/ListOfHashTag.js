import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { profile } from "../../asset/navbar";
import { __getHashTagList } from "../../redux/modules/hashSlice";
import Img from "../elem/Img";
import PrimaryButton from "../elem/PrimaryButton";
import FlexColumnCenter from "../layout/FlexColumnCenter";
import FlexRowCenter from "../layout/FlexRowCenter";
import styled from "styled-components";
function ListOfHashTag() {
  const { tag } = useParams();
  console.log("tag", tag);
  const dispatch = useDispatch();
  const hashTagList = useSelector((state) => state.hashTag.hashTagList);
  console.log(hashTagList)
  useEffect(() => {
    dispatch((__getHashTagList('HashTagTest1')))
  }, []);
  return (
    <FlexColumnCenter pd={"2rem 4rem"} gap="3rem">
      <FlexRowCenter justify="flex-start" gap="5rem">
        <Img type="circle-profile" wd="13rem" hg="13rem" src={profile} />
        <FlexColumnCenter wd="80%" align="flex-start" gap="3rem">
          <FlexColumnCenter align="flex-start" gap="2rem">
            <h1>#tag</h1>
            <h3>게시물 count</h3>
          </FlexColumnCenter>
          <div>
            <PrimaryButton style={{ width: "100%" }}>팔로우</PrimaryButton>
          </div>
        </FlexColumnCenter>
      </FlexRowCenter>
      <StGrid>
        <div>
          <TagImg src={profile} />
        </div>
        <div>
          <TagImg src={profile} />
        </div>
        <div>
          <TagImg src={profile} />
        </div>
        <div>
          <TagImg src={profile} />
        </div>
        <div>
          <TagImg src={profile} />
        </div>
      </StGrid>
    </FlexColumnCenter>
  );
}

export default ListOfHashTag;
const StGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr 1fr 1fr;
`;
const Overlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 99;
`;
const TagImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;
