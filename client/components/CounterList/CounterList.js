import React from "react";

import Counter from "./Counter";

const CounterList = props => {
  return props.counters
    .slice(0)
    .reverse()
    .map(counter => {
      return <Counter key={counter.id} {...counter} />;
    });
};

export default CounterList;
