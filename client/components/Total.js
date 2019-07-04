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
        fontSize: "1em",
        border: "1px solid rgb(232, 232, 232)",
        padding: "0px 20px",
        borderRadius: "4px",
        height: "50px",
        fontWeight: "bolder"
      }}
    >
      <span>Total</span>
      <span>10</span>
    </div>
  );
};

export default CounterContainer;
