import { FC } from "react";
import styles from "./post.module.scss";
import Card from "../shared/card";

export interface IBlogPost {
  htmlContent: string;
  title: string;
  subtitle: string;
}

interface IProps extends IBlogPost {
  id: string;
}

const Post: FC<IProps> = (props) => {
  const { htmlContent, title, subtitle, id } = props;

  /*
  * NOT PRODUCTION READY! To avoid risks of xss attacks we should be doing a lot more 
  * validation of the HTML content before setting it here.
  */
  return (
    <Card className={styles.post}>
      <h2 id={id}>{title}</h2>
      <div className={styles.subtitle}>{subtitle}</div>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </Card>);
};

export default Post;