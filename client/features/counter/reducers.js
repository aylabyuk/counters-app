import {
  ADD_COUNTER,
  GET_COUNTERS_SUCCESS,
  GET_COUNTERS,
  GET_COUNTERS_FAILED
} from "./actions";

const initialState = {
  isFetchingCounters: false,
  counters: []
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return state;
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
    default:
      return state;
  }
};

export default counterReducer;
