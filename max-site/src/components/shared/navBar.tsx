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

  return <Link to={toPath} className={`${styles.navBarLink} ${isCurrentLocation ? styles.selected : ""}`}>{children}</Link>;
};

const NavBar: FC = () => {
  const curLocation = useAppSelector(state => state.nav.currentLocation);

  return <div className={styles.navBarWrapper}>
    <NavBarLink toPath="/home" isCurrentLocation={curLocation === "home"}>Home</NavBarLink>

    <NavBarLink toPath="/blog" isCurrentLocation={curLocation === "blog"}>Stories</NavBarLink>

    <div className={styles.rightSideContent}>
      <a className={styles.sourceLink} href="https://github.com/harkinsmax/max-personal-site" rel="noreferrer" target="_blank">See the source code</a>
    </div>
  </div>;
};

export default NavBar;