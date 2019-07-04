import React from "react";
import { Button } from "antd";

const Counter = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "5px"
      }}
    >
      <span>TestCounter</span>
      <div>
        <Button type="dashed" shape="circle-outline" icon="minus" />
        <span style={{ margin: "0px 10px" }}>5</span>
        <Button type="dashed" shape="circle-outline" icon="plus" />
      </div>
    </div>
  );
};

export default Counter;
