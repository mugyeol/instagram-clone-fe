import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { __getHashTagList } from "../../redux/modules/hashSlice";
import Img from "../elem/Img";
import PrimaryButton from "../elem/PrimaryButton";
import FlexColumnCenter from "../layout/FlexColumnCenter";
import FlexRowCenter from "../layout/FlexRowCenter";
import styled from "styled-components";
import useModal from "../../modal/hooks/useModal";
function ListOfHashTag() {
  const {closeModal, openModal} = useModal()
  closeModal()
  const profileImg = useSelector((state) => state.user.profileImg);

  const { tag } = useParams();
  const dispatch = useDispatch();
  const hashTagList = useSelector((state) => state.hashTag.hashTagList);
  console.log("hashTagList", hashTagList);

  const postingList = hashTagList.postingBriefList;
  console.log("postingList", postingList);
  useEffect(() => {
    dispatch(__getHashTagList(tag));
  }, [dispatch]);
  return (
    <FlexColumnCenter pd={"2rem 4rem"} gap="3rem">
      <FlexRowCenter justify="flex-start" gap="5rem">
        <Img type="circle-profile" wd="13rem" hg="13rem" src={profileImg} />
        <FlexColumnCenter wd="80%" align="flex-start" gap="3rem">
          <FlexColumnCenter align="flex-start" gap="2rem">
            <h1>{hashTagList.hashtag}</h1>
            <h3>{hashTagList.postingCount}</h3>
          </FlexColumnCenter>
          <div>
            <PrimaryButton style={{ width: "100%" }}>팔로우</PrimaryButton>
          </div>
        </FlexColumnCenter>
      </FlexRowCenter>
      <StGrid>
        {postingList
          && postingList.map((post) => (
              <div>
                <TagImg onClick={()=> openModal({type:'detail',props:{id:post.id}})} src={post.postingImg} />
              </div>
            ))
          }

        {/* { hashTagList.length>0 && hashTagList.postingBriefList.length>0 ? hashTagList.postingBriefList.map((hash) => (
          <div>
            <TagImg src={hash.postingImg} />
          </div>
        )) : null} */}
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
  margin-top: 5rem;
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
  border-radius: 30px;
`;
