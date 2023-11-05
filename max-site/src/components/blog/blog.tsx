import { FC } from "react";
import { useAppDispatch } from "../../hooks";
import { setLocationTo } from "../../state/navSlice";
import Post, { IBlogPost } from "./post";
import Card from "../shared/card";
import styles from "./blog.module.scss";
import { rrg } from "./posts";

/* 
* Instead of having these statically in a text file, a better structure would be to load the blog posts from the web
* server as needed. Especially as the number of blog posts grows, pagination could be used to reduce the number of
* resources loaded.
*/
const posts: IBlogPost[] = [
  { title: "Climbing in the RRG", htmlContent: rrg },
  { title: "Bikepacking through Montana", htmlContent: "<div>Coming soon</div>" }
];

const Blog: FC = () => {
  const dispatch = useAppDispatch();
  dispatch(setLocationTo("blog"));

  return <>
    <h1>Blog</h1>
    <Card className={styles.tableOfContents}>
      <div>Table of contents:</div>
      {posts.map((post, index) => {
        return <div><a href={`#${index}`}>{`${index + 1}. ${post.title}`}</a></div>;
      })}
    </Card>

    {posts.map((post, index) => {
      return <Post id={`${index}`} {...post} />;
    })}
  </>;
};

export default Blog;