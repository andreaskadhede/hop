import { forwardRef } from "react";
import styles from "./IconWithText.module.css";
import classNames from "classnames";
import { Icon } from "../Icon/Icon";

export type IconWithTextProps = {
  type:
    | "Expand"
    | "Secure"
    | "Settings"
    | "ThinkingBobles"
    | "Flow"
    | "Statistics"
    | "Learning"
    | "Devices"
    | "Building"
    | "Cloud"
    | "Pencil"
    | "GraduationCap"
    | "Support"
    | "Handshake"
    | "Gears"
    | "CheckBobles"
    | "CheckBoble"
    | "StopWatch"
    | "Checklist"
    | "FixToTheRight";
  children: React.ReactNode;
  horizontal?: boolean;
};

const IconWithText = forwardRef<HTMLDivElement, IconWithTextProps>(
  ({ type, children, horizontal }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames(styles.iconWithText, {
          [styles.horizontal]: horizontal,
        })}
      >
        <Icon
          type={type}
          style={{
            maxWidth: horizontal ? "4.375rem" : "9.375rem",
            minWidth: horizontal ? "0" : "6rem",
          }}
        ></Icon>
        <p style={{ textAlign: horizontal ? "left" : "center" }}>{children}</p>
      </div>
    );
  }
);

export { IconWithText };
