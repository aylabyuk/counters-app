export const ADD_COUNTER = "ADD_COUNTER";

export const addCounter = newCounter => {
  return {
    type: ADD_COUNTER,
    payload: newCounter
  };
};
