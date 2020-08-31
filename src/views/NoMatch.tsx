import React, { Component, useState, useCallback } from "react";

export interface Props {}

export interface State {
  [key: string]: any;
}

class NoMatch extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { count: 0, userInfo: { name: "Jason", age: 24 } };
  }
  private clickHandle() {
    let { count } = this.state;
    this.setState({
      count: count + 1
    });
  }
  render() {
    return (
      <>
        <p onClick={() => this.clickHandle()}>页面找不到了呀</p>
        <p>{this.state.count}</p>
        <hr />
        <Child {...this.state.userInfo}>这是子组件</Child>
      </>
    );
  }
}

interface UserInfo {
  name: string;
  age: number;
}
const Child: React.FC<UserInfo> = React.memo(({ name, age, children }) => {
  console.log("Child -render");
  const [count, setCount] = useState<UserInfo>({ name, age });
  return (
    <div className="User">
      {/* <p>{name}</p>
      <p>{age}</p> */}
      <hr />
      <p>{children}</p>
      <hr />
      <p>Count:{JSON.stringify(count, null, 2)}</p>
      <button
        onClick={() =>
          setCount({
            name: "CHJ",
            age: 23
          })
        }
      >
        +1
      </button>
    </div>
  );
});
export default NoMatch;
