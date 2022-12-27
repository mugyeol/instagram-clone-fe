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
      return <CircleProfile src={props.src} />;
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
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;
