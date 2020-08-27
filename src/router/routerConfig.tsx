import { RouteProps } from "react-router-dom";

import HomePage from "../views/home";
import NoMatch from "../views/NoMatch";
import About from "../views/about";

const routerConfig: Array<RouteProps> = [
  {
    path: "/",
    exact: true,
    component: HomePage
  },
  {
    path: "/about/:id",
    exact: true,
    component: About
  },
  {
    component: NoMatch
  }
];

export default routerConfig;
