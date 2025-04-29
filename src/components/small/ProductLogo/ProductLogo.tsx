import { forwardRef } from "react";

import Originality from "../../../assets/logos/Originality.svg";
import WISEflow from "../../../assets/logos/WISEflow.svg";

export type ProductLogoProps = {
   product: "Originality" | "WISEflow";
   alt?: string;
   width?: number;
};

const logoMap = {
   Originality,
   WISEflow,
};

const ProductLogo = forwardRef<HTMLImageElement, ProductLogoProps>(
   ({ product, alt = product, width }, ref) => {
      const src = logoMap[product];

      return (
         <img
            ref={ref}
            src={src}
            alt={alt}
            style={{ width: width ? `${width}rem` : undefined }}
         />
      );
   }
);

export { ProductLogo };
