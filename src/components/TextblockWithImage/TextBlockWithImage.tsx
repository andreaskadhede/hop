import { forwardRef } from "react";
import styles from "./TextblockWithImage.module.css";
import classNames from "classnames";
import { Header1 } from "../small/Header1/Header1";
import { Header2 } from "../small/Header2/Header2";

type TextBlockWithImageProps = {
  /* the image source */
  imageSrc: string;
  /* the image alt text */
  imageAlt: string;
  /* the header content */
  headerContent?: string;
  /* the subheader content */
  subheaderContent?: string;
  /* the children content */
  children: React.ReactNode;
  /* the image placement
   * @default "right"
   */
  imagePlacement?: "left" | "right";
  /* the image size
   * @default "large"
   */
  imageSize?: "small" | "large";
};

const TextBlockWithImage = forwardRef<HTMLDivElement, TextBlockWithImageProps>(
  (
    {
      imageSrc,
      imageAlt,
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
        })}
      >
        <div className={classNames(styles.textArea)}>
          {headerContent && <Header1 content={headerContent} />}
          {subheaderContent && <Header2 content={subheaderContent} />}
          {children}
        </div>
        <div
          className={classNames(styles.image, {
            [styles.small]: imageSize === "small",
          })}
        >
          <img src={imageSrc} alt={imageAlt} />
        </div>
      </div>
    );
  }
);

export { TextBlockWithImage };
