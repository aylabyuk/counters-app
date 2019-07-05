import { ADD_COUNTER } from "./actions";

const counterReducer = (state = [{ test: "hello" }], action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return state;

    default:
      return state;
  }
};

export default counterReducer;
