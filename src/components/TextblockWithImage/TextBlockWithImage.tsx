import { forwardRef } from "react";
import styles from "./TextblockWithImage.module.css";
import classNames from "classnames";
import { Header1 } from "../small/Header1/Header1";
import { Header2 } from "../small/Header2/Header2";

type TextBlockWithImageProps = {
   imageSrc: string;
   headerContent?: string;
   subheaderContent?: string;
   children?: React.ReactNode;
   imagePlacement?: "left" | "right";
   imageSize?: "small" | "large";
};

const TextBlockWithImage = forwardRef<HTMLDivElement, TextBlockWithImageProps>(
   (
      {
         imageSrc,
         headerContent,
         children,
         imagePlacement,
         imageSize,
         subheaderContent,
      },
      ref
   ) => {
      return (
         <div
            ref={ref}
            className={classNames(styles.textblock, {
               [styles.left]: imagePlacement === "left",
            })}>
            <div className={classNames(styles.textArea)}>
               <Header1 content={headerContent || ""} />
               {subheaderContent && <Header2 content={subheaderContent} />}
               {children}
            </div>
            <div
               className={classNames(styles.image, {
                  [styles.small]: imageSize === "small",
               })}>
               <img src={imageSrc} />
            </div>
         </div>
      );
   }
);

export { TextBlockWithImage };
