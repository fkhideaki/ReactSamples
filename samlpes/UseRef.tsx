import React, { useRef } from "react";

export const App = () => {
  const inputEl = useRef<any>(null);
  const handleClick = () => {
    if (inputEl?.current) {
      inputEl.current.focus();
    }
  };

  return (
    <div>
      <input className="input" ref={inputEl} type="text" />
      <button className="button" onClick={handleClick}>
        input要素にフォーカスする
      </button>
    </div>
  );
};
