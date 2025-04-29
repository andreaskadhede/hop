import { forwardRef, useEffect, useState } from "react";
import styles from "./Testimonials.module.css";
import classNames from "classnames";

import { Header1 } from "../small/Header1/Header1";
import { Header2 } from "../small/Header2/Header2";
import { Button } from "../small/Button/Button";

import testimonial1 from "../../assets/images/testimonial-1.svg";
import testimonial2 from "../../assets/images/testimonial-2.svg";
import testimonial3 from "../../assets/images/testimonial-3.svg";

// Type definition for a single testimonial
type Testimonial = {
   header2Text: string;
   imageSrc: string;
   text: string;
};

// You can still define your default testimonials data here or elsewhere
const testimonialData: Testimonial[] = [
   {
      header2Text:
         "Integrating with an LMS and maintaining academic integrity through WISEflow: the Universidade Aberta story",
      text: "We sat down with Bruno Tavares, Chief Information Security Officer, to discuss the Universidade Aberta’s use of the WISEflow API, integrating with Moodle and how the platform has aided the institution in maintaining academic integrity.",
      imageSrc: testimonial1,
   },
   {
      header2Text:
         "From onboarding to innovation: the University of Portsmouth story",
      text: "When the University of Portsmouth started using WISEflow the initial focus was nly not on using reflective ePortfolios. However, piloting led to a successful onboarding phase, and before they knew it the staff at the University of Portsmouth was pushing the boundaries of digital assessment. Sit back and enjoy our first ever video case study…",
      imageSrc: testimonial2,
   },
   {
      header2Text:
         "Reducing the administrative burden, ensuring flexibility and providing authenticity",
      text: "The Arctic University of Norway (UiT) is a research university that contributes to knowledge-based development at the regional, national and international level. This case study follows a conversation with Maria Mykelstad, Administrative Manager at UiT.   ",
      imageSrc: testimonial3,
   },
];

const Testimonials = forwardRef<HTMLDivElement>(({}, ref) => {
   const [current, setCurrent] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrent((prev) => (prev + 1) % testimonialData.length);
      }, 5000);
      return () => clearInterval(interval);
   }, [testimonialData.length, 5000]);

   const currentTestimonial = testimonialData[current];

   return (
      <div className={classNames(styles.testimonialContainer)} ref={ref}>
         <div className={classNames(styles.testimonial)}>
            <Header1 content="Testimonials" white center />
            <div className={classNames(styles.textAndImage)}>
               <div className={classNames(styles.textblock)}>
                  <div className={classNames(styles.text)}>
                     <Header2 content={currentTestimonial.header2Text} white />
                     <p>{currentTestimonial.text}</p>
                  </div>
                  <Button content="Read more testimonials" inverted />
               </div>
               <div
                  className={classNames(styles.image)}
                  style={{
                     backgroundImage: `url(${currentTestimonial.imageSrc})`,
                  }}
               />
            </div>
         </div>
         {/* Indicators */}
         <div className={classNames(styles.indicators)}>
            {testimonialData.map((_, index) => (
               <div
                  key={index}
                  className={classNames(styles.indicator, {
                     [styles.active]: index === current,
                  })}
               />
            ))}
         </div>
      </div>
   );
});

export { Testimonials };
