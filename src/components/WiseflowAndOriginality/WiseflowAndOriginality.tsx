import { forwardRef } from "react";
import styles from "./WiseflowAndOriginality.module.css";
import classNames from "classnames";

import { Header1 } from "../small/Header1/Header1";
import { Button } from "../small/Button/Button";

import WiseflowAndOriginality from "../../assets/images/wiseflow+originality.svg";
const WISEflowAndOriginality = forwardRef<HTMLDivElement>(({}, ref) => {
  return (
    <div className={classNames(styles.wiseflowAndOriginality)} ref={ref}>
      <div className={classNames(styles.left)}>
        <div className={classNames(styles.text)}>
          <Header1 white content="WISEflow and Originality"></Header1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac massa
            turpis. Suspendisse potenti. Praesent hendrerit neque sit amet nulla
            accumsan rutrum. Quisque eget neque non arcu faucibus consequat ac
            nec est. In sed purus dui. Nullam at ante scelerisque, semper arcu
            eget, pellentesque leo. In viverra aliquam mattis. Proin sodales
            maximus felis, sit amet placerat dolor vulputate id. Praesent ac
            maximus sem. Curabitur nibh metus, posuere et blandit at, tincidunt
            id dui.
          </p>
        </div>
        <Button
          left
          inverted
          content="Read more about WISEflow"
          path="/AboutWISEflow"
        ></Button>
      </div>
      <img
        src={WiseflowAndOriginality}
        alt="The circle of WISEflow and Originality"
        className={classNames(styles.image)}
      />
    </div>
  );
});

export { WISEflowAndOriginality };
