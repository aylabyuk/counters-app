import React from "react";
import { Button } from "antd";
import { connect } from "react-redux";

import { deleteCounter } from "../../features/counter/actions";

const Counter = props => {
  const handleDelete = e => {
    props.onDeleteCounter(props.id);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "5px",
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
          width: "100px",
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <Button
          disabled={props.forDeletion}
          type="dashed"
          shape="circle-outline"
          icon="down"
        />
        <span style={{ margin: "0px 3px" }}>{props.count}</span>
        <Button
          disabled={props.forDeletion}
          type="dashed"
          shape="circle-outline"
          icon="up"
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const forDeletion = state.countersToDelete.includes(ownProps.id);

  return {
    forDeletion
  };
};

const mapActionsToProps = {
  onDeleteCounter: deleteCounter
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Counter);
