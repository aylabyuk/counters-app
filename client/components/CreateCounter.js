import React from "react";
import { Button, Input } from "antd";

const AddCounter = () => {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <Input size="large" placeholder="New Counter" />
      <Button
        style={{ marginLeft: "5px" }}
        size="large"
        type="primary"
        icon="plus"
      >
        Add
      </Button>
    </div>
  );
};

export default AddCounter;
