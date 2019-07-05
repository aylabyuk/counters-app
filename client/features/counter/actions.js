export const ADD_COUNTER = "ADD_COUNTER";
export const GET_COUNTERS_SUCCESS = "GET_COUNTERS_SUCCESS";
export const GET_COUNTERS_FAILED = "GET_COUNTERS_FAILED";
export const GET_COUNTERS = "GET_COUNTERS";

export const addCounter = newCounter => {
  return {
    type: ADD_COUNTER,
    payload: newCounter
  };
};

export const getCounters = () => {
  return {
    type: GET_COUNTERS
  };
};
