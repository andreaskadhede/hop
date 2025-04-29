import { forwardRef, useState } from "react";
import styles from "./Slider.module.css";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faArrowLeftLong,
   faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { Header2 } from "../small/Header2/Header2";

type SliderProps = {
   slider1?: {
      header?: string;
      text: string;
   };
   slider2?: {
      header?: string;
      text: string;
   };
   slider3?: {
      header?: string;
      text: string;
   };
   slider4?: {
      header?: string;
      text: string;
   };
   slider5?: {
      header?: string;
      text: string;
   };
   slider6?: {
      header?: string;
      text: string;
   };
   white?: boolean;
};

const Slider = forwardRef<HTMLDivElement, SliderProps>(
   (
      { slider1, slider2, slider3, slider4, slider5, slider6, white = false },
      ref
   ) => {
      const sliderItems = [
         slider1,
         slider2,
         slider3,
         slider4,
         slider5,
         slider6,
      ].filter(Boolean) as { header: string; text: string }[];
      const [currentIndex, setCurrentIndex] = useState(0);

      const handlePrev = () => {
         setCurrentIndex((prev) =>
            prev === 0 ? sliderItems.length - 1 : prev - 1
         );
      };

      const handleNext = () => {
         setCurrentIndex((prev) =>
            prev === sliderItems.length - 1 ? 0 : prev + 1
         );
      };

      return (
         <div
            className={classNames(styles.slider, { [styles.white]: white })}
            ref={ref}>
            <div
               className={classNames(styles.arrow, { [styles.white]: white })}
               onClick={handlePrev}>
               <FontAwesomeIcon
                  className={classNames(styles.icon)}
                  icon={faArrowLeftLong}
               />
            </div>
            <div
               className={classNames(styles.text, {
                  [styles.white]: white,
               })}>
               <Header2
                  content={sliderItems[currentIndex].header}
                  white={!white}
               />
               <p>{sliderItems[currentIndex].text}</p>
            </div>
            <div
               className={classNames(styles.arrow, { [styles.white]: white })}
               onClick={handleNext}>
               <FontAwesomeIcon
                  className={classNames(styles.icon)}
                  icon={faArrowRightLong}
               />
            </div>
         </div>
      );
   }
);

export { Slider };
