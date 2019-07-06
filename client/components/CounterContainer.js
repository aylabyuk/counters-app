import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";

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

const StyledContentContainer = styled.div`
  width: 100%;
  font-size: 1em;
  border: 1px solid rgb(232, 232, 232);
  border-radius: 4px;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  margin: 5px 0px;
  position: relative;

  ::-webkit-scrollbar-button {
    display: block;
    height: 5px;
    background-color: #aaa;
  }
  ::-webkit-scrollbar-button:hover {
    background-color: #aaa;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #acacac;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #535353;
  }
  ::-webkit-scrollbar-track {
    background-color: #efefef;
  }
  ::-webkit-scrollbar-track:hover {
    background-color: #ccc;
  }
  ::-webkit-scrollbar {
    width: 8px;
  }
`;

const StyledMessage = styled.div`
  color: gray;
  text-align: center;
  padding: 30px;
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

  const transitions = useTransition(props.counters.length > 0, p => p, {
    initial: { opacity: 1, transform: "translate3d(0,0%,0)" },
    from: { opacity: 0, transform: "translate3d(0,100%,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0%,0)" },
    leave: { opacity: 0, transform: "translate3d(0,-50%,0)" },
    trail: 10
  });

  const pages = [
    ({ style }) => (
      <animated.div
        style={{
          ...style,
          position: "absolute",
          width: "inherit"
        }}
      >
        <CounterList counters={props.counters} />
      </animated.div>
    ),
    ({ style }) => (
      <animated.div
        style={{
          ...style,
          position: "absolute"
        }}
      >
        <StyledMessage>
          Hi there! There are no counters available. You might want to create
          one.
        </StyledMessage>
      </animated.div>
    )
  ];

  return (
    <StyledRoot>
      <CreateCounter
        submitting={props.isCreatingCounter}
        createCounter={props.onAddCounter}
      />
      <StyledContentContainer>
        {transitions.map(({ item, props, key }) => {
          const Page = item ? pages[0] : pages[1];
          return <Page key={key} style={props} />;
        })}
      </StyledContentContainer>
      <Total total={totalCounts || 0} />
    </StyledRoot>
  );
};

const mapStateToProps = state => state;

const mapActionsToProps = {
  onAddCounter: addCounter,
  onGetCounters: getCounters
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(CounterContainer);
