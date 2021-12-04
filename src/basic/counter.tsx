import * as React from "react";

export const Counter = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);

  return <button onClick={increment}>{count}</button>;
};
