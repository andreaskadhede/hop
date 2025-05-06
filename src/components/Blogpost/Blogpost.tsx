import { forwardRef } from "react";
import styles from "./Blogpost.module.css";
import classNames from "classnames";

import { Header2 } from "../small/Header2/Header2";

// Type definition for a single testimonial
export type BlogpostData = {
  id: number;
  acf: {
    image: string;
    date: string;
    header: string;
    text: string;
  };
  title: {
    rendered: string;
  };
};

const Blogpost = forwardRef<HTMLDivElement, { blogpost: BlogpostData }>(
  ({ blogpost }, ref) => {
    return (
      <div ref={ref} className={classNames(styles.blogpost)}>
        <img
          src={blogpost.acf.image}
          alt={blogpost.title.rendered}
          className={classNames(styles.image)}
        />
        <div className={classNames(styles.textBlock)}>
          <p>{blogpost.acf.date}</p>
          <Header2 content={blogpost.acf.header}></Header2>
          <p>{blogpost.acf.text}</p>
        </div>
      </div>
    );
  }
);

export { Blogpost };
