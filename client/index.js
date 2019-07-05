import React, { Component } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { createStore } from "redux";
import { Provider } from "react-redux";

import counterReducer from "./features/counter/reducers";

const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

import App from "./components/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
