import { forwardRef, useEffect, useState } from "react";
import styles from "./AboutAndBlog.module.css";
import classNames from "classnames";

import { Header1 } from "../small/Header1/Header1";
import { Button } from "../small/Button/Button";

import { Blogpost, BlogpostData } from "../../components/Blogpost/Blogpost";

const AboutAndBlog = forwardRef<HTMLDivElement>(({}, ref) => {
   return (
      <div className={classNames(styles.aboutContainer)}>
         <div className={classNames(styles.about)}>
            <Header1 content="About UNIwise"></Header1>
            <div className={classNames(styles.text)}>
               <p>
                  UNIwise is a Danish edtech company founded in 2012,
                  specializing in digital assessment solutions for higher
                  education. Their flagship platform, WISEflow, supports the
                  entire exam and assessment lifecycle—from authoring and
                  submission to marking and feedback. Trusted by universities
                  across Europe, UNIwise empowers institutions to move away from
                  paper-based exams and embrace secure, scalable, and
                  student-friendly digital assessments. With a strong focus on
                  innovation, compliance, and accessibility, UNIwise is
                  redefining how assessments are delivered in modern education.
               </p>
               <ul>
                  <li>
                     Working with more than 120 institutions from 15 countries
                  </li>
                  <li>
                     Students using WISEflow from 170 countries, including China
                  </li>
                  <li>
                     3.6 million exams and assessments sat on WISEflow in the
                     past year
                  </li>
                  <li>
                     At peak times, over 90,000 users on WISEflow simultaneously
                  </li>
               </ul>
            </div>
         </div>
         <div className={classNames(styles.blog)}>
            <div className={classNames(styles.blogPosts)}>
               {BlogpostData.map((post, index) => (
                  <Blogpost key={`blogpost${index}`} {...post} />
               ))}
            </div>
            <Button content="Read more blogposts"></Button>
         </div>
      </div>
   );
});

export { AboutAndBlog };
