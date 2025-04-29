import { forwardRef, Ref } from "react";
import UNIwiseLogoBlue from "../../../assets/logos/UNIwiseBlue.svg";
import UNIwiseLogoWhite from "../../../assets/logos/UNIwiseWhite.svg";

export type UNIwiseLogoProps = {
   /** If true, use the blue version of the logo */
   blue?: boolean;
   /** Alt text for the image */
   alt?: string;
};

const UNIwiseLogo = forwardRef<HTMLImageElement, UNIwiseLogoProps>(
   ({ blue = false, alt = "UNIwise logo" }, ref: Ref<HTMLImageElement>) => {
      const logoSrc = blue ? UNIwiseLogoBlue : UNIwiseLogoWhite;

      return <img src={logoSrc} alt={alt} ref={ref} />;
   }
);

export { UNIwiseLogo };
