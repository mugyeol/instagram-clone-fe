import React from "react";
import { flexStart } from "../layout/className";
import FlexRowCenter from "../layout/FlexRowCenter";

const TimeAgo = () => {
  return (
    <FlexRowCenter justify={flexStart}>
      <span style={{ fontSize: "1rem", color: "var(--ig-third-text)" }}>
        2일 전
      </span>
    </FlexRowCenter>
  );
};

export default TimeAgo;
