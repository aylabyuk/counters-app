import * as actions from "../client/features/counter/actions";

describe("actions", () => {
  it("should create an action to create a counter", () => {
    const title = "New Counter";
    const expectedAction = {
      type: actions.ADD_COUNTER,
      payload: title
    };
    expect(actions.addCounter(title)).toEqual(expectedAction);
  });

  it("should create an action to get a list of counter", () => {
    const expectedAction = {
      type: actions.GET_COUNTERS
    };
    expect(actions.getCounters()).toEqual(expectedAction);
  });

  it("should create an action to delete a counter", () => {
    const id = "abcdefg";
    const expectedAction = {
      type: actions.DELETE_COUNTER,
      payload: id
    };
    expect(actions.deleteCounter(id)).toEqual(expectedAction);
  });
});
