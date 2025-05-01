import { forwardRef } from "react";
import styles from "./Button.module.css";
import classNames from "classnames";
import { Link } from "react-router";

export type ButtonProps = {
  /** content of the button */
  content: string;
  /** path to navigate to */
  path?: string;
  /** button type */
  type?: "button" | "submit" | "reset";
  /** optional className */
  inverted?: boolean;

  left?: boolean;
};

const Button = forwardRef<HTMLAnchorElement, ButtonProps>(
  ({ content = "button", path = "/", inverted = false, left }, ref) => {
    return (
      <Link
        style={{
          alignSelf: left ? "start" : undefined,
        }}
        to={path}
        className={classNames(styles.button, {
          [styles.inverted]: inverted,
        })}
        ref={ref}
      >
        {content}
      </Link>
    );
  }
);

export { Button };
