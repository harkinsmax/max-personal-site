import { FC } from "react";
import { useAppDispatch } from "../../hooks";
import { setLocationTo } from "../../state/navSlice";

const Blog: FC = () => {
  const dispatch = useAppDispatch();
  dispatch(setLocationTo("blog"));

  return <>
    <h1>Blog</h1><p>Text goes here</p></>;
};

export default Blog;