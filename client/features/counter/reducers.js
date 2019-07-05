import {
  ADD_COUNTER,
  GET_COUNTERS_SUCCESS,
  GET_COUNTERS,
  GET_COUNTERS_FAILED,
  ADD_COUNTER_FAILED,
  ADD_COUNTER_SUCCESS,
  DELETE_COUNTER,
  DELETE_COUNTER_FAILED,
  DELETE_COUNTER_SUCCESS,
  INCREMENT_COUNTER,
  INCREMENT_COUNTER_SUCCESS,
  DECREMENT_COUNTER,
  DECREMENT_COUNTER_SUCCESS
} from "./actions";

export const initialState = {
  isFetchingCounters: false,
  isCreatingCounter: false,
  counters: [],
  countersToDelete: [],
  awaiting: []
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

const removeItemFromAwaiting = (state, id) => {
  const indexOfItem = state.awaiting.findIndex(item => item.id === id);

  return [
    ...state.awaiting.slice(0, indexOfItem),
    ...state.awaiting.slice(indexOfItem + 1, state.awaiting.length)
  ];
};

const subtractAwaiting = (state, type, id) => {
  const indexOfItem = state.awaiting.findIndex(item => item.id === id);

  let newAwaiting = [...state.awaiting];

  newAwaiting[indexOfItem][type] -= 1;

  return newAwaiting;
};

const setAwaiting = (state, type, id) => {
  const indexOfItem = state.awaiting.findIndex(item => item.id === id);

  let newAwaiting = [...state.awaiting];

  if (indexOfItem < 0) {
    newAwaiting.push({
      id,
      increment: type === "increment" ? 1 : 0,
      decrement: type === "decrement" ? 1 : 0
    });
  } else {
    newAwaiting[indexOfItem][type] += 1;
  }

  return newAwaiting;
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

    /// Deleting a counter
    case DELETE_COUNTER:
      return {
        ...state,
        countersToDelete: [...state.countersToDelete, action.payload]
      };

    case DELETE_COUNTER_SUCCESS:
      return {
        ...removeFromList(state, action.payload.id),
        counters: action.payload.counters,
        awaiting: removeItemFromAwaiting(state, action.payload.id)
      };

    case DELETE_COUNTER_FAILED:
      console.log("err:", action);
      return {
        ...state,
        countersToDelete: []
      };

    /// Incrementing a counter
    case INCREMENT_COUNTER:
      return {
        ...state,
        awaiting: setAwaiting(state, "increment", action.payload)
      };

    case INCREMENT_COUNTER_SUCCESS:
      return {
        ...state,
        counters: action.payload.counters,
        awaiting: subtractAwaiting(state, "increment", action.payload.id)
      };

    /// Decrementing a counter
    case DECREMENT_COUNTER:
      return {
        ...state,
        awaiting: setAwaiting(state, "decrement", action.payload)
      };

    case DECREMENT_COUNTER_SUCCESS:
      return {
        ...state,
        counters: action.payload.counters,
        awaiting: subtractAwaiting(state, "decrement", action.payload.id)
      };

    // default case
    default:
      return state;
  }
};

export default counterReducer;
