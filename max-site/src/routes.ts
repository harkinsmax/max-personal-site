import About from "./components/about/about";
import Blog from "./components/blog/blog";
import { RouteObject } from "react-router-dom";
import Home from "./components/home/home";
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