import React from "react";
import styled from "styled-components";
const Img = (props) => {
  switch (props.type) {
    case "primary-icon":
      return <PrimaryIcon src={props.src} />;
    case "secondary-icon":
      return <SecondaryIcon src={props.src} />;
    case "addpost-image":
      return <AddPostImage src={props.src || ""} />;
    case "login-img":
      return <LoginImage src={props.src} />;
    case "circle-profile":
      return <CircleProfile {...props} />;
    case "store-image":
      return <StoreImage src={props.src} />;
    case "login-left":
      return <LoginLeftIcon src={props.src} />;
    case "login-right":
      return <LoginRightIcon src={props.src} />;
    case "kakao-chat":
      return <KakaoChatIcon src={props.src} />;
    case "detail-image":
      return <DetailImage src={props.src} />;
    default:
      return <StImg src={props.src} />;
  }
};

export default Img;

const StImg = styled.img`
  width: ${({ wd }) => wd || "2.5rem"};
  height: ${({ hg }) => hg || "2.5rem"};
  border: none;
`;
const SecondaryIcon = styled(StImg)`
  filter: var(--ig-secondary-logo);
`;
const PrimaryIcon = styled(StImg)`
  filter: var(--ig-primary-logo);
`;
const AddPostImage = styled(StImg)`
  width: var(--ig-width-addpost-img-wrapper);
  height: 100%;
`;
const LoginImage = styled.img`
  width: 41rem;
  height: 60rem;
`;
const CircleProfile = styled.img`
  width: ${({ wd }) => wd || "4rem"};
  height: ${({ hg }) => hg || "4rem"};
  border-radius: 50%;
`;
const StoreImage = styled.img`
  width: 12rem;
  height: 4rem;
  cursor: pointer;
`;
const LoginLeftIcon = styled.img`
  width: 1.4rem;
  height: 1.4rem;
  margin: 0 1rem 0;
`;
const LoginRightIcon = styled.img`
  margin: 0 1rem 0 0.3rem;
  width: 1.6rem;
  height: 1.6rem;
`;
const KakaoChatIcon = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  filter: var(--ig-secondary-logo);
`
const DetailImage = styled.img`
  width: 100%;
  height: 100%;
`