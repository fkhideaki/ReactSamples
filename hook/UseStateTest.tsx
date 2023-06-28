import React, { useState, useEffect } from "react";

const CountComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("コンポーネントがマウントされました");

    const countUp = setInterval(() => {
      setCount((count) => count + 1);
      console.log("カウントが1アップしました");
    }, 1000);

    return () => {
      console.log("コンポーネントがアンマウントされました");
      clearInterval(countUp);
    };
  },
  []);
  return <p className="num">{count}</p>;
};

export const App = () => {
  const [isView, setIsView] = useState(true);
  const handleToggleView = () => {
    setIsView(!isView);
  };

  return (
    <div>
      <div className="box">
        {isView && <CountComponent />}
      </div>
      <button className="button" onClick={handleToggleView}>
        数値の表示を切り替える
      </button>
    </div>
  );
};
