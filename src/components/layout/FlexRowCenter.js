import React from "react";
import styled from "styled-components";

const FlexRowCenter = (props) => {
  const onClickHandler = () => {
    props.onClick();
  };

  switch (props.type) {
    case "add-header":
      return <AddHeader {...props}>{props.children}</AddHeader>;
    case "sign-in":
      return <LoginFlexRow {...props}>{props.children}</LoginFlexRow>;
    case "sign-up":
      return <LoginFlexRow {...props}>{props.children}</LoginFlexRow>;
    case "full-height":
      return <FullHeight {...props}>{props.children}</FullHeight>;
    case "side-nav-wrap":
      return <SideNavWrapper {...props}>{props.children}</SideNavWrapper>;
    case "flex":
      return <FlexGrow {...props}>{props.children}</FlexGrow>;
    case "post-button-group":
      return <PostButtonGroup {...props}>{props.children}</PostButtonGroup>;
    case "post-add-comment":
      return <PostAddComment {...props}>{props.children}</PostAddComment>;
    default:
      return <StFlexRowCenter {...props}>{props.children}</StFlexRowCenter>;
  }
};

export default FlexRowCenter;

export const StFlexRowCenter = styled.div`
  width: 100%;
  height: ${({ hg }) => hg || "none"};
  display: flex;
  flex-direction: row;
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "center"};
  margin: ${({ mg }) => mg || "0"};
  padding: ${({ pd }) => pd || "0"};
  gap: ${({ gap }) => gap || "0"};
`;
const AddHeader = styled(StFlexRowCenter)`
  justify-content: space-between;
  border-bottom: 1px solid var(--ig-elevated-separator);
  padding: 1.2rem 1.2rem;
`;
const LoginFlexRow = styled(StFlexRowCenter)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  flex: 1;
`;
const FullHeight = styled(StFlexRowCenter)`
  height: 100%;
`;
const FlexGrow = styled(StFlexRowCenter)`
  flex: 1;
`;
const SideNavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
`;
const PostButtonGroup = styled(StFlexRowCenter)`
  padding: var(--ig-post-padding);
  .icon {
    cursor: pointer;
    &:hover {
      filter: var(--ig-elevated-sp-filter);
    }
  }
  .heart-fill {
    filter: var(--ig-heartfill-filter);
  }
  .chat {
    transform: scaleX(-1);
  }
`;
const PostAddComment = styled(PostButtonGroup)`
  padding: 0.1rem 0;
  border-top: 1px solid var(--ig-elevated-separator);
  gap:0.5rem
`;
