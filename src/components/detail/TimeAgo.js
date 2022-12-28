import React from "react";
import { useSelector } from "react-redux";
import { flexStart } from "../layout/className";
import FlexRowCenter from "../layout/FlexRowCenter";

const TimeAgo = () => {
  const timeago = useSelector(state=> state.detail.postDetail.createdAt)
  return (
    <FlexRowCenter justify={flexStart}>
      <span style={{ fontSize: "1.2rem", color: "var(--ig-third-text)" }}>
        {timeago}
      </span>
    </FlexRowCenter>
  );
};

export default TimeAgo;
