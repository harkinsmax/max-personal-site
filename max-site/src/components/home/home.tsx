import { FC } from "react";
import { useAppDispatch } from "../../hooks";
import { setLocationTo } from "../../state/navSlice";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  dispatch(setLocationTo("home"));

  return <>
    <h1>Home</h1><p>Text goes here</p>
  </>;
};

export default Home;