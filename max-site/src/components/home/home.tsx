import { FC, useEffect } from "react";
import { useAppDispatch } from "../../hooks";
import { setLocationTo } from "../../state/navSlice";
import Card from "../shared/card";
import PhotoGallery from "../shared/photoGallery";
import styles from "./home.module.scss";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => { dispatch(setLocationTo("home")); });

  const photosOfMe = [
    { url: "/photos/meHiking.jpg", caption: "Standing on a ridge line in the North Cascades. This was an unseasonably warm October backpacking trip", alt: "Max Harkins standing in front of mountains carrying a large backpack" },
    { url: "/photos/meSkiing.jpg", caption: "Skiing with Becca at Mt. Bachelor, enjoying the wonderful view of the Three Sisters", alt: "Max Harkins wearing ski gear standing in front of mountains" },
    { url: "/photos/meClimbing.jpg", caption: "Trying out a boulder in Wisconsin's North Woods. The climbing was wonderful, and secluded from crowds.", alt: "Max Harkins climbing on a boulder" }
  ];

  return <>
    <h1>Welcome!</h1>
    <Card>
      <h2>About me</h2>
      I'm Max Harkins, I work as a software developer and in my free time like to play outside.
      I like to have hobbies that keep me active, but also enjoy sitting still to read books
      or binge TV (preferably a nature documentary or comedy).
      <br /><br />
      If you're my friend, you know that:

      <ul>
        <li>I have a large appetite, and won't say no to free food. I think things taste the best after a long bike ride.</li>
        <li>On the topic of food, my favorite foods are pumpkin and pickles.</li>
        <li>I enjoy listening to bluegrass, and play the guitar and mandolin.</li>
        <li>I go by Max, which is my middle name. I don't mind if people call me by my first name either, which is Donald.</li>
        <li>My most recent favorite book is Cadillac Desert by Marc Reisner, and I'm always happy to talk about water usage in the American West.</li>
      </ul>

      <PhotoGallery photos={photosOfMe} />
    </Card>
    <Card>
      <h2>Get in touch</h2>
      <div className={styles.contactLinks}>
        <a href="https://github.com/harkinsmax" className={styles.linkWithIcon}><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="" />GitHub</a>
        <a href="https://www.linkedin.com/in/donald-max-harkins-5a9546172" className={styles.linkWithIcon}><img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" />LinkedIn</a>
      </div>
    </Card>
  </>;
};

export default Home;