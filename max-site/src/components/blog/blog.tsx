import { FC, useEffect } from "react";
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
  { title: "Climbing in the RRG", subtitle: "10/5/23 - 10/9/23", htmlContent: rrg },
  { title: "Bikepacking through Montana", subtitle: "7/15/23 - 8/6/23", htmlContent: "<div>Coming soon</div>" }
];

const Blog: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => { dispatch(setLocationTo("blog")); });

  return <>
    <h1>Stories</h1>
    <Card className={styles.tableOfContents}>
      <div>Welcome to my blog! I'll use this page to document some of my adventures. I hope you enjoy the read!<br /><br /></div>
      <div>Table of contents:</div>
      {posts.map((post, index) => {
        return <div key={index}><a href={`#${index}`}>{`${index + 1}. ${post.title}`}</a></div>;
      })}
    </Card>

    {posts.map((post, index) => {
      return <Post key={index} id={`${index}`} {...post} />;
    })}
  </>;
};

export default Blog;