import { ADD_COUNTER, SET_COUNTERS, GET_COUNTERS } from "./actions";

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
    case SET_COUNTERS:
      return {
        ...state,
        isFetchingCounters: false,
        counters: action.payload
      };
    default:
      return state;
  }
};

export default counterReducer;
