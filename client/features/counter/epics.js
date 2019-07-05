import { filter, mergeMap, catchError } from "rxjs/operators";

import {
  GET_COUNTERS,
  GET_COUNTERS_SUCCESS,
  GET_COUNTERS_FAILED,
  ADD_COUNTER,
  ADD_COUNTER_SUCCESS,
  ADD_COUNTER_FAILED
} from "../counter/actions";

import { combineEpics } from "redux-observable";

const fetchCountersEpic = action$ =>
  action$.pipe(
    filter(action => action.type === GET_COUNTERS),
    mergeMap(async action => {
      const url = "http://localhost:3000/api/v1/counters";
      const counters = await fetch(url).then(res => res.json());

      return Object.assign({}, action, {
        type: GET_COUNTERS_SUCCESS,
        payload: counters
      });
    }),
    catchError(err =>
      Promise.resolve({ type: GET_COUNTERS_FAILED, message: err.message })
    )
  );

const addCountersEpic = action$ =>
  action$.pipe(
    filter(action => action.type === ADD_COUNTER),
    mergeMap(async action => {
      const url = "http://localhost:3000/api/v1/counter";

      const counters = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: action.payload
        })
      }).then(res => res.json());

      return Object.assign({}, action, {
        type: ADD_COUNTER_SUCCESS,
        payload: counters
      });
    }),
    catchError(err =>
      Promise.resolve({ type: ADD_COUNTER_FAILED, message: err.message })
    )
  );

export default combineEpics(fetchCountersEpic, addCountersEpic);
