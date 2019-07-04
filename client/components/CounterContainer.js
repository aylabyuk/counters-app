import React from "react";

import CreateCounter from "./CreateCounter";

const CounterContainer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        maxWidth: "500px",
        margin: "auto",
        padding: "50px"
      }}
    >
      <CreateCounter />
      <div>Counter List</div>
      <div>Total</div>
    </div>
  );
};

export default CounterContainer;
