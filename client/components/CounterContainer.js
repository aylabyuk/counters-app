import React from "react";

import CreateCounter from "./CreateCounter";
import CounterList from "./CounterList/CounterList";
import Total from "./Total";

const CounterContainer = () => {
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

export default CounterContainer;
