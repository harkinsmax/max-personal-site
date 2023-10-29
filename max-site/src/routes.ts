import About from "./About/About";
import Blog from "./Blog/Blog";
import { RouteObject } from "react-router-dom";
import Home from "./Home/Home";

export const routes: RouteObject[] = [
  {
    path: "/",
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
];