import React from "react";
import styled, { css } from "styled-components";

const FlexColumnCenter = (props) => {
  const onClickHandler = () => {
    props.onClick();
  };
  switch (props.type) {
    case "add-body":
      return <AddBody {...props}>{props.children}</AddBody>;
    case "full-height":
      return <FullHeight {...props}>{props.children}</FullHeight>;
    case "sign-up":
      return <LoginFlexColumn {...props}>{props.children}</LoginFlexColumn>;
    case "sign-in":
      return <LoginFlexColumn {...props}>{props.children}</LoginFlexColumn>;
    case "addpost-content":
      return <AddPostContent {...props}>{props.children}</AddPostContent>;
    case "content-replies":
      return <ContentReplyContainer {...props}>{props.children}</ContentReplyContainer>;
    default:
      return (
        <StFlexColumnCenter {...props}>{props.children}</StFlexColumnCenter>
      );
  }
};

export default FlexColumnCenter;

export const StFlexColumnCenter = styled.div`
  width: ${({ wd }) => wd || "100%"};
  display: flex;
  flex-direction: column;

  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "center"};

  margin: ${({ mg }) => mg || "0"};
  padding: ${({ pd }) => pd || "0"};
  gap: ${({ gap }) => gap || "0"};
`;
const AddBody = styled(StFlexColumnCenter)`
  height: 100%;
  gap: 3rem;
  h1 {
    font-weight: 200;
  }
`;
const FullHeight = styled(StFlexColumnCenter)`
  height: 100%;
`;
const LoginFlexColumn = styled(StFlexColumnCenter)`
  padding: 2rem 0 4rem;
  width: 100%;
  height: 100vh;
  background-color: var(--ig-light-theme-background);
`;
const AddPostContent = styled(StFlexColumnCenter)`
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2rem;
  gap: 2rem;
`;
const ContentReplyContainer = styled(AddPostContent)`
  border-bottom: 1px solid var(--ig-elevated-separator);
  border-top: 1px solid var(--ig-elevated-separator);
  flex: 1;
  padding: var(--ig-post-padding) var(--ig-post-padding) 0.1rem
`;
