import { forwardRef } from "react";
import styles from "./Blogpost.module.css";
import classNames from "classnames";

import { Header2 } from "../small/Header2/Header2";

import sikt from "../../assets/images/sikt-blogpost.svg";
import christmas from "../../assets/images/christmas-party-blogpost.svg";
import ai from "../../assets/images/ai-blogpost.svg";

// Type definition for a single testimonial
type Blogposts = {
   imageSrc: string;
   date: string;
   header2Text: string;
   text: string;
};

// You can still define your default testimonials data here or elsewhere
const BlogpostData: Blogposts[] = [
   {
      imageSrc: sikt,
      date: "30/01/2025",
      header2Text:
         "UNIwise selected as provider of a new and future-oriented system for digital exams in Norway",
      text: "UNIwise is proud to announce its selection as the provider of the digital exam system for universities and colleges in Norway. Following an extensive and competitive procurement process conducted by Sikt, (the Norwegian Agency for Shared Services in Education and Research), our platform, WISEflow, was chosen as the preferred solution, excelling in quality, service, and cost-effectiveness.",
   },
   {
      imageSrc: christmas,
      date: "17/12/2024",
      header2Text:
         "UNIwise Christmas party recap: workshops, collaboration and a party to remember!",
      text: "From 12-13 December UNIwise held its annual Christmas get-together at our head office in Aarhus, Denmark. We spent our first day together collaborating and attending valuable workshops, before attending a wonderful Christmas party.",
   },
   {
      imageSrc: ai,
      date: "14/10/2024",
      header2Text:
         "How can we guarantee the integrity and authenticity of assessment, especially in the wake of issues like Generative AI?",
      text: "UNIwise recently circulated our Survey report white paper, which discussed the most prominent takeaways from our widely contributed-to 2024 Annual Survey. This blog post marks the first of a new series that seeks to reflect on the key takeaways from the Survey report, and up first are the issues of authentic assessment, academic integrity, and the rise of Generative AI.",
   },
];

type BlogpostProps = {
   imageSrc: string;
   date: string;
   header2Text: string;
   text: string;
};

const Blogpost = forwardRef<HTMLDivElement, BlogpostProps>(
   ({ imageSrc, date, header2Text, text }, ref) => {
      return (
         <div ref={ref} className={classNames(styles.blogpost)}>
            <img src={imageSrc} alt="" className={classNames(styles.image)} />
            <div className={classNames(styles.textBlock)}>
               <p>{date}</p>
               <Header2 content={header2Text}></Header2>
               <p>{text}</p>
            </div>
         </div>
      );
   }
);

export { Blogpost, BlogpostData };
