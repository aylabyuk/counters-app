import React from "react";

import Counter from "./Counter";

const CounterList = () => {
  return (
    <div
      style={{
        width: "100%",
        fontSize: "3em",
        border: "1px solid rgb(232, 232, 232)",
        padding: "0px 20px",
        borderRadius: "4px",
        maxHeight: "100%",
        overflowY: "scroll",
        margin: "5px 0px"
      }}
    >
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
};

export default CounterList;
