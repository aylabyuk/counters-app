import {
  GET_COUNTERS,
  GET_COUNTERS_SUCCESS,
  GET_COUNTERS_FAILED
} from "../counter/actions";
const fetch = require("node-fetch");

export const fetchCountersEpic = action$ =>
  action$.pipe(
    filter(action => action.type === GET_COUNTERS),
    mergeMap(async action => {
      const url = `/api/v1/counters`;
      const counters = await fetch(url).then(res => res.json);
      return Object.assign({}, action, {
        type: GET_COUNTERS_SUCCESS,
        payload: counters
      });
    }),
    catchError(err =>
      Promise.resolve({ type: GET_COUNTERS_FAILED, message: err.message })
    )
  );