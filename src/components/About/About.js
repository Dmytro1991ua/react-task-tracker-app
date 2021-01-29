import React from "react";
import styles from "./About.module.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.about}>
      <p className={styles.info}>
        Task Tracker App is quite useful and efficient for those who would like
        to keep abreast with their busy daily life by adding new, sometimes
        elaborate tasks and be able to not forget them
      </p>
      <Link to="/" className={styles.link}>
        Go Back
      </Link>
    </div>
  );
};

export default About;
