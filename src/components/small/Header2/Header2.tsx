import { forwardRef, Ref } from "react";
import styles from "./Header2.module.css";
import classNames from "classnames";
import { HeaderProps } from "../Header1/Header1";

const Header2 = forwardRef<HTMLHeadingElement, HeaderProps>(
   ({ content = "Header 2", white = false }, ref) => {
      return (
         <h2
            ref={ref}
            className={classNames(styles.header, {
               [styles.white]: white,
            })}>
            {content}
         </h2>
      );
   }
);

export { Header2 };
