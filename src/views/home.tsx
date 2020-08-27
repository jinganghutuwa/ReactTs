import React from "react";
// import logo from "./../logo.svg";
import "./../assets/style/views/home.scss";
import AvatorImg from "./../assets/imgs/avatar.jpg";

// ! 非状态组件
// function Home() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// ! 状态组件
export interface Props {
  [propName: string]: any;
}

export interface State {
  name: string;
}

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { name: "Jason" };
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  clickHandle() {
    console.log("测试一下");
  }
  clickHandle2 = () => {
    console.log("clickHandle2");
    this.props.history.push({ pathname: "/about/6" });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={AvatorImg} className="App-logo" alt="logo" />
          <p onClick={e => this.clickHandle()}>
            Edit <code>src/App.tsx</code> and save to reload. {this.state.name}
          </p>
          <p className="App-link" onClick={this.clickHandle2}>
            Learn React
          </p>
        </header>
      </div>
    );
  }
}

export default Home;
