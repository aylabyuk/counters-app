import React from "react";
import styled from "styled-components";

import Counter from "./Counter";

const StyledRoot = styled.div`
  width: 100%;
  font-size: 1em;
  border: 1px solid rgb(232, 232, 232);
  border-radius: 4px;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  margin: 5px 0px;

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
