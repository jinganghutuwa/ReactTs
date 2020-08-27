/*
 * @Author: Jason
 * @version:
 * @Date: 2020-08-27 15:21:19
 * @LastEditors: Jason
 * @LastEditTime: 2020-08-27 15:24:32
 * @Descripttion:
 */
import { RouteProps } from "react-router-dom";
declare namespace ROUTERCONFIG {
  interface ROUTERITEM extends RouteProps {
    meta?: META;
  }
  interface META {
    isAuth?: boolean;
    title?: string;
  }
}
