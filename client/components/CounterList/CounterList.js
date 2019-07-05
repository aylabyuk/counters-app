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
      {props.counters.length > 0 ? (
        props.counters
          .slice(0)
          .reverse()
          .map(counter => {
            return <Counter key={counter.id} {...counter} />;
          })
      ) : (
        <div
          style={{
            color: "gray",
            textAlign: "center",
            padding: "30px"
          }}
        >
          Hi there! There are no counters available. You might want to create
          one.
        </div>
      )}
    </div>
  );
};

export default CounterList;
