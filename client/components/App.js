import React from "react";
import { Layout, Typography } from "antd";

import CounterContainer from "./CounterContainer";

const App = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Layout.Header style={{ textAlign: "center", padding: "10px" }}>
        <Typography.Title style={{ color: "#fff" }} level={2}>
          Counter App
        </Typography.Title>
      </Layout.Header>
      <Layout.Content style={{ flex: "1 1 auto" }}>
        <CounterContainer />
      </Layout.Content>
      <Layout.Footer style={{ textAlign: "center" }}>
        oriel.absin@gmail.com
      </Layout.Footer>
    </Layout>
  );
};

export default App;
