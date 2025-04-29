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
            })}>
            <Icon type={type} width={horizontal ? 6.25 : 10}></Icon>
            <p style={{ textAlign: horizontal ? "left" : "right" }}>
               {children}
            </p>
         </div>
      );
   }
);

export { IconWithText };
