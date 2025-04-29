import { forwardRef } from "react";
import styles from "./SpeakingBoble.module.css";
import classNames from "classnames";
import { Header1 } from "../Header1/Header1";
import { Header2 } from "../Header2/Header2";
import taleBoble from "../../../assets/taleboble.svg";

type SpeakingBobleProps = {
   headerContent: string;
   text: string;
   year: number;
   direction?: "up" | "down";
};

const SpeakingBoble = forwardRef<HTMLDivElement, SpeakingBobleProps>(
   ({ headerContent, text, year, direction }, ref) => {
      return (
         <div className={classNames(styles.event)}>
            <div className={classNames(styles.boble)}>
               <img
                  src={taleBoble}
                  alt=""
                  className={classNames(
                     styles.image,
                     { [styles.up]: direction === "up" },
                     { [styles.down]: direction === "down" }
                  )}
               />
               <div className={classNames(styles.text)}>
                  <Header2 content={headerContent} />
                  <p>{text}</p>
               </div>
            </div>
            <Header1 content={year?.toString()} />
         </div>
      );
   }
);

export { SpeakingBoble };
