import * as actions from "../../client/features/counter/actions";

describe("actions", () => {
  it("should create an action to create a counter", () => {
    const text = "New Counter";
    const expectedAction = {
      type: actions.ADD_COUNTER,
      payload: text
    };
    expect(actions.addCounter(text)).toEqual(expectedAction);
  });

  it("should create an action to get a list of counter", () => {
    const expectedAction = {
      type: actions.GET_COUNTERS
    };
    expect(actions.getCounters()).toEqual(expectedAction);
  });
});
