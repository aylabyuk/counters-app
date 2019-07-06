import React from "react";
import { Badge } from "antd";
import styled from "styled-components";

const StyledRoot = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 1em;
  border: 1px solid rgb(232, 232, 232);
  padding: 20px 10px;
  border-radius: 4px;
  height: 50px 20px;
  font-weight: bolder;
`;

const StyledBadge = styled(Badge)`
  .ant-badge-count {
    background-color: rgba(255, 255, 255, 0);
    color: #535355;
    font-size: x-large;
  }
`;

const Total = props => {
  return (
    <StyledRoot>
      <StyledBadge showZero overflowCount={10000} count={props.total} />
    </StyledRoot>
  );
};

export default Total;
