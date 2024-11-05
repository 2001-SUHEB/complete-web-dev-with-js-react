import { useState } from "react";

function useCounter(initialCount=0) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(0)
  }

  return {increment,decrement,reset,count};
}

export default useCounter;