import React from "react";

import Counter from "./Counter";

const CounterList = props => {
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
      {props.counters.map(counter => {
        return <Counter title={counter.title} count={counter.count} />;
      })}
    </div>
  );
};

export default CounterList;
