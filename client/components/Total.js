import React from "react";
import { Badge } from "antd";

const CounterContainer = props => {
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
      <Badge
        showZero
        overflowCount={10000}
        count={props.total}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0)",
          color: "#535355",
          fontSize: "large"
        }}
      />
    </div>
  );
};

export default CounterContainer;
