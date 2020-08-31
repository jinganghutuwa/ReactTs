import React, { useState, useEffect, useRef } from "react";

// ! 非状态组件
const Home: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const countRef = useRef<number>(count);

  useEffect(() => {
    countRef.current = count;
  });
  const handleCount = () => {
    setTimeout(() => {
      alert("current count: " + countRef.current);
    }, 3000);
  };

  return (
    <div>
      <p>
        current count: {count}-{countRef.current}
      </p>
      <button onClick={() => setCount(count + 1)}>加</button>
      <button onClick={() => handleCount()}>弹框显示</button>
    </div>
  );
};
export default React.memo(Home);
