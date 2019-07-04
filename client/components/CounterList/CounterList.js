import React from "react";

import Counter from "./Counter";

const CounterList = () => {
  return (
    <div
      style={{
        width: "100%",
        fontSize: "1em",
        border: "1px solid rgb(232, 232, 232)",
        borderRadius: "4px",
        maxHeight: "100%",
        overflowY: "scroll",
        margin: "5px 0px"
      }}
    >
      <Counter count={5} />
      <Counter count={10} />
      <Counter count={100} />
      <Counter count={1000} />
    </div>
  );
};

export default CounterList;
