import React, { useEffect } from "react";
import { connect } from "react-redux";

import CreateCounter from "./CreateCounter";
import CounterList from "./CounterList/CounterList";
import Total from "./Total";
import { addCounter, getCounters } from "../features/counter/actions";

const CounterContainer = props => {
  useEffect(() => {
    props.onGetCounters();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "500px",
        margin: "auto",
        padding: "50px"
      }}
    >
      <CreateCounter createCounter={props.onAddCounter} />
      <CounterList counters={props.counters} />
      <Total />
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

const mapActionsToProps = {
  onAddCounter: addCounter,
  onGetCounters: getCounters
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(CounterContainer);
