import reducer from "../client/features/counter/reducers";
import * as types from "../client/features/counter/actions";

import { initialState } from "../client/features/counter/reducers";

describe("Counters Reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle GET_COUNTERS", () => {
    expect(
      reducer([], {
        type: types.GET_COUNTERS
      }).isFetchingCounters
    ).toEqual(true);
  });

  it("should handle GET_COUNTERS_SUCCESS", () => {
    expect(
      reducer([], {
        type: types.GET_COUNTERS_SUCCESS
      }).isFetchingCounters
    ).toEqual(false);
  });

  it("should handle GET_COUNTERS_FAILED", () => {
    expect(
      reducer([], {
        type: types.GET_COUNTERS_FAILED
      }).isFetchingCounters
    ).toEqual(false);
  });

  it("should handle ADD_COUNTER", () => {
    expect(
      reducer([], {
        type: types.ADD_COUNTER
      }).isCreatingCounter
    ).toEqual(true);
  });

  it("should handle ADD_COUNTER_SUCCESS", () => {
    expect(
      reducer([], {
        type: types.ADD_COUNTER_SUCCESS
      }).isCreatingCounter
    ).toEqual(false);
  });

  it("should handle ADD_COUNTER_FAILED", () => {
    expect(
      reducer([], {
        type: types.ADD_COUNTER_FAILED
      }).isCreatingCounter
    ).toEqual(false);
  });
});
