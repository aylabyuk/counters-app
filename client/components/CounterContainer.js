import React from "react";
import { connect } from "react-redux";

import CreateCounter from "./CreateCounter";
import CounterList from "./CounterList/CounterList";
import Total from "./Total";

const CounterContainer = props => {
  console.log(props);
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
      <CreateCounter />
      <CounterList />
      <Total />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    counters: state
  };
};

export default connect(mapStateToProps)(CounterContainer);
