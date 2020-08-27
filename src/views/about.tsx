import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

// ! 非状态组件
function Home() {
  const obj = useParams();
  useEffect(() => {
    console.log(obj);
  });
  return <div className="App">这是about页面</div>;
}
export default Home;
