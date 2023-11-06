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
      I'm Max Harkins, I work as a software developer and in my free time like to play outside. My first name is Donald, but I go by middle name Max.
      I started programming in high school during AP Calculus, where I would program games on my TI 84+ graphing calculator with TI-BASIC.
      My best game had players navigate a maze and look for the exit, and relied on the calculators' matrix memory to store maze layouts --
      I believe the calculator was limited to less than 10.
      <br /><br />
      In 2020 I received a BS in Computer Science Systems, with a minor in Mathematics. I started out as an Electrical and Computer Engineering
      major, but decided in my sophomore year I was more interested in programming than I was in analog electronics. By doing the Systems option
      for computer science, I still got to take computer architecture and digital logic design courses, but also got to take high level AI and numerical
      analysis courses that I found interesting.
      <br /><br />
      I take my work seriously, and my leisure time seriously too. When I'm not developing cool new features to improve healthcare through telehealth,
      I'm rock climbing, skiing, biking, or running. I enjoy kicking back with a good book (current favorite is Cadillac Desert by Marc Reisner), or watching TV too,
      especially if it's a gray rainy day.

      <PhotoGallery photos={photosOfMe} />
    </Card>
    <Card>
      <h2>Get in touch</h2>
      <div>
        I'd love to hear from you! You can reach me by email at <a href="mailto: harkinsmax@gmail.com">harkinsmax@gmail.com</a> or through the sites below:
      </div>
      <div className={styles.contactLinks}>
        <a href="https://github.com/harkinsmax" className={styles.linkWithIcon}><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="" />GitHub</a>
        <a href="https://www.linkedin.com/in/donald-max-harkins-5a9546172" className={styles.linkWithIcon}><img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="" />LinkedIn</a>
      </div>
    </Card>
  </>;
};

export default Home;