import React, { useState, useEffect } from "react";
import { Tooltip, Icon } from "antd";

function LikeDislikes() {
  return (
    <React.Fragment>
      <span key="comment-basic-like">
        <Tooltip title="Like">
          <Icon type="like"></Icon>
          <span>0</span>
        </Tooltip>
      </span>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span key="comment-basic-dislike">
        <Tooltip title="Dislike">
          <Icon type="dislike"></Icon>
          <span>0</span>
        </Tooltip>
      </span>
    </React.Fragment>
  );
}

export default LikeDislikes;
