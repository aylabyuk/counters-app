export const GET_COUNTERS_SUCCESS = "GET_COUNTERS_SUCCESS";
export const GET_COUNTERS_FAILED = "GET_COUNTERS_FAILED";
export const GET_COUNTERS = "GET_COUNTERS";

export const ADD_COUNTER_SUCCESS = "ADD_COUNTER_SUCCESS";
export const ADD_COUNTER_FAILED = "ADD_COUNTER_FAILED";
export const ADD_COUNTER = "ADD_COUNTER";

export const DELETE_COUNTER_SUCCESS = "DELETE_COUNTER_SUCCESS";
export const DELETE_COUNTER_FAILED = "DELETE_COUNTER_FAILED";
export const DELETE_COUNTER = "DELETE_COUNTER";

export const getCounters = () => {
  return {
    type: GET_COUNTERS
  };
};

export const addCounter = newCounter => {
  return {
    type: ADD_COUNTER,
    payload: newCounter
  };
};

export const deleteCounter = id => {
  return {
    type: DELETE_COUNTER,
    payload: id
  };
};
