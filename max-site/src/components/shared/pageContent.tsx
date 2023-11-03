import { FC } from "react";
import styles from "./pageContent.module.scss";
import NavBar from "./navBar";

const PageContent: FC<React.PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <>
      <div className={styles.backgroundDiv} />
      <div className={styles.fullPage}>
        <NavBar />
        <div className={styles.overflowWrapper}>
          <div className={styles.pageContentOuter}>
            <div className={styles.pageContent}>{children}</div>
          </div>
        </div>

      </div>
    </>);
};

export default PageContent;