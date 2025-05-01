import styles from "./WISEcon25.module.css";
import classNames from "classnames";
import { Button } from "../small/Button/Button";
import { Header1 } from "../small/Header1/Header1";
import { Header2 } from "../small/Header2/Header2";

import WISEcon from "../../assets/images/conference.svg";

const WISEcon25 = () => {
  return (
    <div className={classNames(styles.WISEcon25)}>
      <img src={WISEcon} alt="" className={classNames(styles.image)} />

      <div className={classNames(styles.right)}>
        <div className={classNames(styles.text)}>
          <div className={classNames(styles.header)}>
            <Header1 content="WISEcon25"></Header1>
            <Header2 content="Barbican Centre, London, UK Tuesday 23 - Wednesday 24 September"></Header2>
          </div>
          <p>
            WISEcon25, a two-day event hosted and curated by UNIwise, brings
            together people who are passionate about learning technology across
            all levels of higher education, from the Exams Office to the Pro
            Vice Chancellor’s office, to share their knowledge and experience.
          </p>
          <div className={classNames(styles.info)}>
            <p>
              WISEcon speaker ticket price: €275 WISEcon regular ticket price:
              €469
            </p>
            <p className={classNames(styles.bold)}>
              PLEASE NOTE: Our early bird deal ended on 1 March 2025
            </p>
          </div>
        </div>
        <Button
          left
          content="Read more about WISEcon25"
          path="/WISEcon25"
        ></Button>
      </div>
    </div>
  );
};

export { WISEcon25 };
