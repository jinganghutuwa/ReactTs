import React, { Fragment, useCallback, useState, useEffect } from "react";

export interface props {
  [key: string]: any;
}

const UseCallbackPage: React.SFC<props> = () => {
  console.log("Father - render");
  const [time, setTime] = useState<number>(0);
  const [random, setRandom] = useState<number>(0);
  return (
    <Fragment>
      这里是UseCallbackPage页面
      <hr />
      <button onClick={() => setTime(new Date().getTime())}>获取当前时间</button>
      <button onClick={() => setRandom(Math.random())}>获取当前随机数</button>
      <Show time={time}>{random}</Show>
    </Fragment>
  );
};

export interface Props {
  time: number;
}

const Show: React.SFC<Props> = ({ time, children }) => {
  function changeTime(time: number): string {
    console.log("changeTime excuted...");
    return new Date(time).toISOString();
  }
  const getNewTIme = useCallback(() => {
    return changeTime(time);
  }, [time]);
  useEffect(() => {
    console.log("effect function here...");
  }, [time]);

  return (
    <div>
      <p>Time is: {getNewTIme()}</p>
      <p>Random is: {children}</p>
    </div>
  );
};

export default UseCallbackPage;
