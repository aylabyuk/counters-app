import React, { useState } from "react";
import { Button, Input, Form } from "antd";

const AddCounter = props => {
  const [title, setTitle] = useState("");

  const handleChangeTitle = e => {
    setTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.createCounter(title);
    setTitle("");
  };

  return (
    <Form onSubmit={handleSubmit} style={{ display: "flex", width: "100%" }}>
      <Input
        size="default"
        placeholder="New Counter"
        onChange={handleChangeTitle}
        value={title}
      />
      <Button
        disabled={title === ""}
        loading={props.submitting}
        style={{ marginLeft: "5px" }}
        size="default"
        type="primary"
        icon="plus"
        htmlType="submit"
      >
        Add
      </Button>
    </Form>
  );
};

export default AddCounter;
