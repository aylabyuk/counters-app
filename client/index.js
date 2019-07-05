import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { createEpicMiddleware } from "redux-observable";

import counterReducer from "./features/counter/reducers";
import App from "./components/App";

//epics
import { fetchCountersEpic } from "./features/counter/epics";

const observableMiddleware = createEpicMiddleware(fetchCountersEpic);

const store = createStore(
  counterReducer,
  compose(
    applyMiddleware(observableMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
