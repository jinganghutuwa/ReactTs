import HomePage from "../views/home";
import NoMatch from "../views/NoMatch";
import About from "../views/about";
import Login from "../views/login";
import UseMemo from "../views/hooks/useMemo";
import UseCallback from "../views/hooks/useCallback";
import UseReducer from "../views/hooks/useReducer";
import UseContext from "../views/hooks/useContext";
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
    path: "/useMemo",
    exact: true,
    component: UseMemo
  },
  {
    path: "/useCallback",
    exact: true,
    component: UseCallback
  },
  {
    path: "/useReducer",
    exact: true,
    component: UseReducer
  },
  {
    path: "/useContext",
    exact: true,
    component: UseContext
  },
  {
    component: NoMatch
  }
];

export default routerConfig;
