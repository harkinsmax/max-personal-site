import { FC } from "react";
import { Link } from "react-router-dom";

const NavBar: FC = () => {
  return <>
    <div>
      <Link to="/home">Home</Link>

      <Link to="/blog">Stories</Link>

      <Link to="/about">About Me</Link>
    </div>
  </>
}

export default NavBar;