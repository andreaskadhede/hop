import styles from "./Products.module.css";
import classNames from "classnames";
import { Button } from "../small/Button/Button";
import { Header1 } from "../small/Header1/Header1";
import { Header2 } from "../small/Header2/Header2";
import { ProductLogo } from "../small/ProductLogo/ProductLogo";

type ProductsProps = {
   productPage: "WISEflow" | "Originality";
   white?: boolean;
};

function Products({ productPage, white = false }: ProductsProps) {
   return (
      <div className={classNames(styles.products, { [styles.white]: white })}>
         <div
            className={classNames(styles.productBox, {
               [styles.white]: white,
            })}>
            <div className={classNames(styles.productHeader)}>
               <Header1 content="WISEflow" center />
               <Header2 content="End-to-end digital assessment platform" />
            </div>
            <ProductLogo product="WISEflow" width={12.1875} />
            <ul>
               <li>Assessment creation tools</li>
               <li>Secure browser environment for controlled exams</li>
               <li>Remote proctoring options</li>
               <li>
                  Marker workflows – distribute grading among multiple assessors
               </li>
               <li>Feedback channels for students</li>
            </ul>
            {productPage === "WISEflow" ? (
               <Button content="Request demo"></Button>
            ) : (
               <Button content="Read more" path="/AboutWISEflow"></Button>
            )}
            <p className={classNames(styles.condition, styles.hidden)}>
               Requires WISEflow
            </p>
         </div>
         <div
            className={classNames(styles.productBox, {
               [styles.white]: white,
            })}>
            <div className={classNames(styles.productHeader)}>
               <Header1 content="Originality" center />
               <Header2 content="AI-Powered Plagiarism Detection" />
            </div>
            <ProductLogo product="Originality" width={10.3125} />
            <ul>
               <li>Semantic similarity scanning</li>
               <li>Easy to toggle report on and off</li>
               <li>
                  Highlights potential cases of direct plagiarism and
                  paraphrasing
               </li>
               <li>
                  Covering +50 different languages out of the box in one Large
                  Language Model
               </li>
            </ul>

            {productPage === "WISEflow" ? (
               <Button content="Read more" path="/AboutOriginality"></Button>
            ) : (
               <Button content="Request demo"></Button>
            )}
            <p className={classNames(styles.condition)}>Requires WISEflow</p>
         </div>
      </div>
   );
}

export { Products };
