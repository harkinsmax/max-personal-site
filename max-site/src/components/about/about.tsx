import { FC } from "react";
import { useAppDispatch } from "../../hooks";
import { setLocationTo } from "../../state/navSlice";

const About: FC = () => {
  const dispatch = useAppDispatch();
  dispatch(setLocationTo("about"));

  return <>
    <h1>About Me</h1><p>Text goes here</p></>;
};

export default About;