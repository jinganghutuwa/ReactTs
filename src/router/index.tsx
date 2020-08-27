import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, RouteProps } from "react-router-dom";
import RouterViews from "./routerConfig";

class ReactRouter extends Component {
  render() {
    return (
      <Router basename="/reactDemo">
        {/* <div>这是路由页面</div> */}
        <Switch>
          {RouterViews.map((item: RouteProps, idx: number) => {
            return <Route key={idx} path={item.path} exact={item.exact} component={item.component} />;
          })}
          {/* 如果上面的Route的路径都没有匹配上，则 <NoMatch>被渲染，我们可以在此组件中返回404或者重定向到首页 */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </Router>
    );
  }
}

export default ReactRouter;
