import About from "./About/About";
import Blog from "./Blog/Blog";
import { RouteObject } from "react-router-dom";
import Home from "./Home/Home";
import App from "./App";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: App({}),
    children: [
      {
        path: "/home",
        element: Home({}),
      },      
      {
        path: "/about",
        element: About({}),
      },
      {
        path: "/blog",
        element: Blog({}),
      },
    ]
  }
];