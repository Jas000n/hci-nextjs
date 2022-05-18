import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const CountStateContext = createContext();
const CountDispatchContext = createContext();
function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);
  return (
    <CountStateContext value={count}>
      <CountDispatchContext value={setCount}>{children}</CountDispatchContext>
    </CountStateContext>
  );
}

function useCountState() {
  const context = useContext(CountStateContext);
  return context;
}

function useCountDispatch() {
  const context = useContext(CountDispatchContext);
  return context;
}

export { useCountState, useCountDispatch, CountContextProvider };
