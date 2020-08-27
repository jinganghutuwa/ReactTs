import HomePage from "../views/home";
import NoMatch from "../views/NoMatch";
import About from "../views/about";
import Login from "../views/login";
import { ROUTERCONFIG } from "../types/thirdParty/router";

const routerConfig: Array<ROUTERCONFIG.ROUTERITEM> = [
  {
    path: "/",
    exact: true,
    component: HomePage
  },
  {
    path: "/about/:id",
    exact: true,
    meta: {
      isAuth: true
    },
    component: About
  },
  {
    path: "/login",
    exact: true,
    component: Login
  },
  {
    component: NoMatch
  }
];

export default routerConfig;
