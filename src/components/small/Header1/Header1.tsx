import { forwardRef } from "react";
import styles from "./Header1.module.css";
import classNames from "classnames";

export type HeaderProps = {
  /** content of the button */
  content: string;

  /** optional className */
  white?: boolean;

  center?: boolean;
  right?: boolean;
};

const Header1 = forwardRef<HTMLHeadingElement, HeaderProps>(
  ({ content = "Header 1", white = false, center, right }, ref) => {
    return (
      <h1
        ref={ref}
        className={classNames(styles.header, {
          [styles.white]: white,
        })}
        style={{ textAlign: center ? "center" : right ? "right" : "left" }}
      >
        {content}
      </h1>
    );
  }
);

export { Header1 };
