import {
  ADD_COUNTER,
  GET_COUNTERS_SUCCESS,
  GET_COUNTERS,
  GET_COUNTERS_FAILED,
  ADD_COUNTER_FAILED,
  ADD_COUNTER_SUCCESS,
  DELETE_COUNTER,
  DELETE_COUNTER_FAILED,
  DELETE_COUNTER_SUCCESS
} from "./actions";

export const initialState = {
  isFetchingCounters: false,
  isCreatingCounter: false,
  counters: [],
  countersToDelete: []
};

const removeFromList = (state, toRemove) => {
  const indexOfItem = state.countersToDelete.indexOf(toRemove);

  return {
    ...state,
    countersToDelete: [
      ...state.countersToDelete.slice(0, indexOfItem),
      ...state.countersToDelete.slice(
        indexOfItem + 1,
        state.countersToDelete.length
      )
    ]
  };
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

    // Deleting a counter
    case DELETE_COUNTER:
      return {
        ...state,
        countersToDelete: [...state.countersToDelete, action.payload]
      };

    case DELETE_COUNTER_SUCCESS:
      return {
        ...removeFromList(state, action.payload.id),
        counters: action.payload.counters
      };

    case DELETE_COUNTER_FAILED:
      console.log("err:", action);
      return {
        ...removeFromList(state, action.payload.id)
      };

    // default case
    default:
      return state;
  }
};

export default counterReducer;
