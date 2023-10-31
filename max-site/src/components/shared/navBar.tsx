import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./navBar.module.scss";
import { useAppSelector } from "../../hooks";

interface ILinkProps extends React.PropsWithChildren {
  toPath: string,
  isCurrentLocation: boolean,
}

const NavBarLink: FC<ILinkProps> = (props) => {
  const { toPath, isCurrentLocation, children } = props;

  return <a href={toPath} className={`${styles.navBarLink} ${isCurrentLocation ? styles.selected : ""}`}>{children}</a>;

  //return <Link to={toPath} className={`${styles.navBarLink} ${isCurrentLocation ? styles.selected : ""}`}>{children}</Link>;
};

const NavBar: FC = () => {
  const curLocation = useAppSelector(state => state.nav.currentLocation);

  return <div className={styles.navBarWrapper}>
    <NavBarLink toPath="/home" isCurrentLocation={curLocation === "home"}>Home</NavBarLink>

    <NavBarLink toPath="/blog" isCurrentLocation={curLocation === "blog"}>Stories</NavBarLink>

    <NavBarLink toPath="/about" isCurrentLocation={curLocation === "about"}>About Me</NavBarLink>
  </div>;
};

export default NavBar;