import React, { useEffect, useRef, useState } from "react";

export const App = () => {
  const count = useRef(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("レンダリングが実行されました");
  });

  const handleAddCount = () => {
    count.current += 1;
    console.log(`count.currentの値は現在${count.current}です。`);
  };
  const handleAddCount2 = () => {
    setCount2(count2 + 1);
  };

  return (
    <>
      <button onClick={handleAddCount}>数値を1増やす</button>
      <p>{count.current}</p>
      <button onClick={handleAddCount2}>数値を1増やす(2)</button>
      <p>{count2}</p>
    </>
  );
};
