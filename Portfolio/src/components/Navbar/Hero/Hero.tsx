import React from "react";
import { getImageUrl } from "../../../utils";
import styles from './Hero.module.css';

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}> I am Mahenoor Ahsan!</h1>
            <p className={styles.description}>I am a software Developer with 1.5 years of experience in Java and Angular. Reach out, if you wanna know more.</p>
            <a  className={styles.contactBtn} href="mailto:mahii828113@gmail.com">Contact Me !</a>
        </div>
        <img src='../../../assets/myPic.png' alt="Her" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
}