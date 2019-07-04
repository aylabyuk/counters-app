import React from "react";
import { Typography } from "antd";

const CounterContainer = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        fontSize: "2em",
        border: "1px solid darkgray",
        padding: "0px 20px",
        borderRadius: "4px"
      }}
    >
      <span>Total</span>
      <span>10</span>
    </div>
  );
};

export default CounterContainer;
