import React from "react";
import styled from "styled-components";

import Counter from "./Counter";

const StyledRoot = styled.div`
  width: 100%;
  font-size: 1em;
  border: 1px solid rgb(232, 232, 232);
  border-radius: 4px;
  max-height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  margin: 5px 0px;
`;

const StyledMessage = styled.div`
  color: gray;
  text-align: center;
  padding: 30px;
`;

const CounterList = props => {
  return (
    <StyledRoot>
      {props.counters.length > 0 ? (
        props.counters
          .slice(0)
          .reverse()
          .map(counter => {
            return <Counter key={counter.id} {...counter} />;
          })
      ) : (
        <StyledMessage>
          Hi there! There are no counters available. You might want to create
          one.
        </StyledMessage>
      )}
    </StyledRoot>
  );
};

export default CounterList;
