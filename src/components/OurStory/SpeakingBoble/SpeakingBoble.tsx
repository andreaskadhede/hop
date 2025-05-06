import { forwardRef } from "react";
import styles from "./SpeakingBoble.module.css";
import classNames from "classnames";
import { Header1 } from "../../small/Header1/Header1";
import { Header2 } from "../../small/Header2/Header2";
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
      <div
        style={{
          display: "flex",
          flexDirection: direction === "up" ? "column-reverse" : "column",
        }}
        ref={ref}
      >
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
          <div
            className={classNames(
              styles.text,
              { [styles.up]: direction === "up" },
              { [styles.down]: direction === "down" }
            )}
          >
            <Header2 content={headerContent} />
            <p>{text}</p>
          </div>
        </div>
        <Header1 right content={year?.toString()} />
      </div>
    );
  }
);

export { SpeakingBoble };
