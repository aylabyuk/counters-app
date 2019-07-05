import React from "react";
import { Button, Badge } from "antd";
import { connect } from "react-redux";

import {
  deleteCounter,
  incrementCounter
} from "../../features/counter/actions";

const Counter = props => {
  const handleDelete = () => {
    props.onDeleteCounter(props.id);
  };

  const handleIncrement = () => {
    props.onIncrementCounter(props.id);
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
            marginRight: "5px"
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
        <Badge count={0}>
          <Button
            disabled={props.forDeletion}
            type="dashed"
            shape="circle-outline"
            icon="down"
          />
        </Badge>
        <span style={{ margin: "0px 3px" }}>{props.count}</span>
        <Badge count={props.awaitingIncrement}>
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

  return {
    forDeletion,
    awaitingIncrement
  };
};

const mapActionsToProps = {
  onDeleteCounter: deleteCounter,
  onIncrementCounter: incrementCounter
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Counter);
