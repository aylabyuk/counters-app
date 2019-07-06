import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import CreateCounter from "./CreateCounter";
import CounterList from "./CounterList/CounterList";
import Total from "./Total";
import { addCounter, getCounters } from "../features/counter/actions";

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 500px;
  margin: auto;
  padding: 50px;
`;

const CounterContainer = props => {
  useEffect(() => {
    props.onGetCounters();
  }, []);

  let totalCounts =
    props.counters.length > 0 &&
    props.counters.reduce((a, b) => {
      return { count: a.count + b.count };
    }).count;

  return (
    <StyledRoot>
      <CreateCounter
        submitting={props.isCreatingCounter}
        createCounter={props.onAddCounter}
      />
      <CounterList counters={props.counters} />
      <Total total={totalCounts || 0} />
    </StyledRoot>
  );
};

const mapStateToProps = state => {
  return state;
};

const mapActionsToProps = {
  onAddCounter: addCounter,
  onGetCounters: getCounters
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(CounterContainer);
