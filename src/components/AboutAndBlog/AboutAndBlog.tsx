import { forwardRef, useEffect, useState } from "react";
import styles from "./AboutAndBlog.module.css";
import classNames from "classnames";

import { Header1 } from "../small/Header1/Header1";
import { Button } from "../small/Button/Button";

import { Blogpost, BlogpostData } from "../../components/Blogpost/Blogpost";

const AboutAndBlog = forwardRef<HTMLDivElement>((_, ref) => {
  const [blogposts, setBlogposts] = useState<BlogpostData[]>([]);

  useEffect(() => {
    const fetchBlogposts = async () => {
      try {
        const response = await fetch(
          "https://advanced-frontend-development.andreaskadhede.dk/wp-json/wp/v2/blogpost?acf_format=standard&orderby=date&order=asc&per_page=15"
        );
        const data = await response.json();
        setBlogposts(data);
      } catch (error) {
        console.error("Error fetching blogposts:", error);
      }
    };

    fetchBlogposts();
  }, []);

  return (
    <div className={classNames(styles.aboutContainer)} ref={ref}>
      <div className={classNames(styles.about, "greySideBox")}>
        <Header1 content="About UNIwise"></Header1>
        <div className={classNames(styles.text)}>
          <p>
            UNIwise is a Danish edtech company founded in 2012, specializing in
            digital assessment solutions for higher education. Their flagship
            platform, WISEflow, supports the entire exam and assessment
            lifecycle—from authoring and submission to marking and feedback.
            Trusted by universities across Europe, UNIwise empowers institutions
            to move away from paper-based exams and embrace secure, scalable,
            and student-friendly digital assessments. With a strong focus on
            innovation, compliance, and accessibility, UNIwise is redefining how
            assessments are delivered in modern education.
          </p>
          <ul>
            <li>Working with more than 120 institutions from 15 countries</li>
            <li>Students using WISEflow from 170 countries, including China</li>
            <li>
              3.6 million exams and assessments sat on WISEflow in the past year
            </li>
            <li>At peak times, over 90,000 users on WISEflow simultaneously</li>
          </ul>
        </div>
      </div>
      <div className={classNames(styles.blog)}>
        <div className={classNames(styles.blogPosts)}>
          {blogposts.map((blogpost: BlogpostData, index: number) => (
            <Blogpost key={`blogpost${index}`} blogpost={blogpost} />
          ))}
        </div>
        <Button content="Read more blogposts"></Button>
      </div>
    </div>
  );
});

export { AboutAndBlog };
