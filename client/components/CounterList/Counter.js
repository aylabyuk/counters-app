import React from "react";
import { Button, Badge } from "antd";
import { connect } from "react-redux";
import styled from "styled-components";

import {
  deleteCounter,
  incrementCounter,
  decrementCounter
} from "../../features/counter/actions";

const StyledRoot = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 13px 15px;
  border-bottom: 1px solid rgb(232, 232, 232);
`;

const StyledDeleteButton = styled(Button)`
  margin-right: 25px;
  color: #535355;
  font-size: large;
`;

const StyledCountingSection = styled.div`
  display: flex;
  width: 135px;
  justify-content: space-between;
  align-items: center;
`;

const StyledBadge = styled(Badge)`
  .ant-badge-count {
    background-color: ${props => props.bgColor || "red"};
    color: ${props => (props.isMainCount ? "#535355" : "white")};
    font-size: ${props => (props.isMainCount ? "large" : "small")};
  }
`;

const IncDecButton = ({ count, disabled, bgColor, onClick, icon }) => (
  <StyledBadge count={count} bgColor={bgColor}>
    <Button
      disabled={disabled}
      type="dashed"
      shape="circle-outline"
      icon={icon}
      onClick={onClick}
    />
  </StyledBadge>
);

const StyledIncDecButton = styled(IncDecButton)`
  .ant-badge sup {
    background-color: ${props => props.bgColor || "white"};
    color: white;
  }
`;

const Counter = props => {
  const handleDelete = () => {
    props.onDeleteCounter(props.id);
  };

  const handleIncrement = () => {
    props.onIncrementCounter(props.id);
  };

  const handleDecrement = () => {
    props.onDecrementCounter(props.id);
  };

  return (
    <StyledRoot>
      <div>
        <StyledDeleteButton
          type="danger"
          shape="circle-outline"
          icon="delete"
          onClick={handleDelete}
          loading={props.forDeletion}
        />
        <span>{props.title}</span>
      </div>
      <StyledCountingSection>
        <StyledIncDecButton
          count={-props.awaitingDecrement}
          bgColor="#e44d5f"
          disabled={props.forDeletion}
          onClick={handleDecrement}
          icon="down"
        />
        <span style={{ margin: "0px 3px" }}>
          <StyledBadge
            showZero
            overflowCount={10000}
            count={props.count}
            bgColor="rgba(255, 255, 255, 0)"
            isMainCount
          />
        </span>
        <StyledIncDecButton
          count={+props.awaitingIncrement}
          bgColor="#5eacff"
          disabled={props.forDeletion}
          onClick={handleIncrement}
          icon="up"
        />
      </StyledCountingSection>
    </StyledRoot>
  );
};

const mapStateToProps = (state, ownProps) => {
  const forDeletion = state.countersToDelete.includes(ownProps.id);

  const indexOfItem = state.awaiting.findIndex(item => item.id === ownProps.id);

  const awaitingIncrement =
    (state.awaiting[indexOfItem] && state.awaiting[indexOfItem].increment) || 0;

  const awaitingDecrement =
    (state.awaiting[indexOfItem] && state.awaiting[indexOfItem].decrement) || 0;

  return {
    forDeletion,
    awaitingIncrement,
    awaitingDecrement
  };
};

const mapActionsToProps = {
  onDeleteCounter: deleteCounter,
  onIncrementCounter: incrementCounter,
  onDecrementCounter: decrementCounter
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Counter);
