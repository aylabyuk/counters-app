import React from "react";
import { Button, Badge } from "antd";
import { connect } from "react-redux";

import {
  deleteCounter,
  incrementCounter,
  decrementCounter
} from "../../features/counter/actions";

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
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "13px 5px",
        borderBottom: "1px solid rgb(232, 232, 232)"
      }}
    >
      <div>
        <Button
          style={{
            marginRight: "25px",
            color: "#535355",
            fontSize: "large"
          }}
          type="danger"
          shape="circle-outline"
          icon="delete"
          onClick={handleDelete}
          loading={props.forDeletion}
        />
        <span>{props.title}</span>
      </div>
      <div
        style={{
          display: "flex",
          width: "135px",
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <Badge
          count={-props.awaitingDecrement}
          style={{ backgroundColor: "#e44d5f", color: "white" }}
        >
          <Button
            disabled={props.forDeletion}
            type="dashed"
            shape="circle-outline"
            icon="down"
            onClick={handleDecrement}
          />
        </Badge>
        <span style={{ margin: "0px 3px" }}>
          <Badge
            showZero
            count={props.count}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0)",
              color: "#535355",
              fontSize: "large"
            }}
          />
        </span>
        <Badge
          count={+props.awaitingIncrement}
          style={{ backgroundColor: "#5eacff", color: "white" }}
        >
          <Button
            disabled={props.forDeletion}
            type="dashed"
            shape="circle-outline"
            icon="up"
            onClick={handleIncrement}
          />
        </Badge>
      </div>
    </div>
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
