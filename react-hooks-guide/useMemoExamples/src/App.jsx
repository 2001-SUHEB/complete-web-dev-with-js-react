import { useState, useMemo } from "react";

const expenseCalculator = (count) => {
  console.log("Calculating expense..."); // Log when calculation occurs
  let sum = 0;
  for (let i = 0; i < count; i++) {
    sum += i;
  }
  return sum;
};

const App = () => {
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    setCount(parseInt(e.target.value) || 0); // Handle NaN case
  };

  // Log when the component renders
  console.log("Rendering component...");

  // Use useMemo to memoize the result of the expenseCalculator
  const memoizedExpense = useMemo(() => {
    console.log("Memoized calculation happening...");
    return expenseCalculator(count);
  }, [count]);

  return (
    <>
      <h1>Use of useMemo Hook</h1>
      <input type="number" value={count} onChange={handleChange} />
      <h2>Expense: {memoizedExpense}</h2>
    </>
  );
};

export default App;
