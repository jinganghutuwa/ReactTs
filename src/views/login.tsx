import React, { useState } from "react";
import { useNetwork, useRequest } from "ahooks";

type IProps = {
  onPress: () => void;
  iconStyle?: any;
  url: string;
};
function changeUsername(username: string): Promise<{ success: boolean }> {
  console.log(username);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
}
// ! 使用函数式组件时需要将组件申明为React.FC类型，也就是 Functional Component 的意思，另外props需要申明各个参数的类型，然后通过泛型传递给React.FC。
// ! 用 React.FC 的方式来创建我的有类型约束的函数式组件，它还支持 children 的传入，即使在我们的类型中并没有定义它
const Login: React.FC<IProps> = (props: IProps) => {
  const [state, setState] = useState("");
  const { loading, run } = useRequest(changeUsername, {
    manual: true,
    onSuccess: (result, params) => {
      if (result.success) {
        setState("");
        console.log(`The username was changed to "${params[0]}" !`);
      }
    }
  });
  console.log(useNetwork());

  return (
    <div>
      <input
        onChange={e => setState(e.target.value)}
        value={state}
        placeholder="Please enter username"
        style={{ width: 240, marginRight: 16 }}
      />
      <button disabled={loading} type="button" onClick={() => run(state)}>
        {loading ? "loading" : "Edit"}
      </button>
    </div>
  );
};

export default Login;
