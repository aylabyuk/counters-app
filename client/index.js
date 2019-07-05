import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { createEpicMiddleware } from "redux-observable";

import counterReducer from "./features/counter/reducers";
import App from "./components/App";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//epics
import counterEpics from "./features/counter/epics";

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  counterReducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(counterEpics);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
