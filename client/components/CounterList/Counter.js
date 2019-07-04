import React from "react";
import { Button } from "antd";

const Counter = props => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "5px",
        borderBottom: "1px solid rgb(232, 232, 232)"
      }}
    >
      <div>
        <Button
          style={{
            marginRight: "5px"
          }}
          type="danger"
          shape="circle-outline"
          icon="delete"
        />
        <span>TestCounter</span>
      </div>
      <div
        style={{
          display: "flex",
          width: "100px",
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <Button type="dashed" shape="circle-outline" icon="down" />
        <span style={{ margin: "0px 3px" }}>{props.count}</span>
        <Button type="dashed" shape="circle-outline" icon="up" />
      </div>
    </div>
  );
};

export default Counter;
