import React, { useState, useEffect, useReducer } from "react";

type StateType = {
  count: number;
};

type ActionType = {
  type: "reset" | "decrement" | "increment";
};
const initialState = { count: 0 };
function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case "reset":
      return initialState;
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export interface Props {
  initialCount: number;
}

const UseReducerPage: React.SFC<Props> = ({ initialCount = 0 }) => {
  const [state, dispatch] = useReducer(reducer, { count: initialCount });
  return (
    <>
      <div>这是UseReducer页面</div>
      <hr />
      <div>
        Count: {state.count}
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      </div>
    </>
  );
};

export default UseReducerPage;
