import {
  ADD_COUNTER,
  GET_COUNTERS_SUCCESS,
  GET_COUNTERS,
  GET_COUNTERS_FAILED,
  ADD_COUNTER_FAILED,
  ADD_COUNTER_SUCCESS
} from "./actions";

const initialState = {
  isFetchingCounters: false,
  isCreatingCounter: false,
  counters: []
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    /// fetching all counters
    case GET_COUNTERS:
      return { ...state, isFetchingCounters: true };
    case GET_COUNTERS_SUCCESS:
      return {
        ...state,
        isFetchingCounters: false,
        counters: action.payload
      };
    case GET_COUNTERS_FAILED:
      console.log("err:", action);
      return { ...state, isFetchingCounters: false };

    /// Adding a counter
    case ADD_COUNTER:
      return { ...state, isCreatingCounter: true };
    case ADD_COUNTER_SUCCESS:
      return {
        ...state,
        isCreatingCounter: false,
        counters: action.payload
      };
    case ADD_COUNTER_FAILED:
      console.log("err:", action);
      return { ...state, isCreatingCounter: false };

    // default case
    default:
      return state;
  }
};

export default counterReducer;
