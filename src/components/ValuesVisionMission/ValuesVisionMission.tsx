import { forwardRef } from "react";
import styles from "./ValuesVisionMission.module.css";
import classNames from "classnames";
import { Header1 } from "../small/Header1/Header1";
import { IconWithText } from "../small/IconWithText/IconWithText";

import OurVisionVideo from "../../assets/placeholder/OurVisionVideo.svg";

type ValuesVisionMissionProps = {};

const ValuesVisionMission = forwardRef<
  HTMLDivElement,
  ValuesVisionMissionProps
>(() => {
  return (
    <div className={classNames(styles.valuesVisionMission)}>
      <div className={styles.values}>
        <div className={styles.textArea}>
          <Header1 content="Values" />

          <IconWithText type="Handshake" horizontal>
            <b>Trust</b> – We build reliable, secure, and transparent solutions.
          </IconWithText>
          <IconWithText type="Expand" horizontal>
            <b>Innovation</b> – We continuously push the boundaries of digital
            assessment.
          </IconWithText>
          <IconWithText type="Building" horizontal>
            <b>Leadership in Digital Exams</b> – We strive to be at the
            forefront of shaping the future of digital assessment.
          </IconWithText>
          <IconWithText type="ThinkingBobles" horizontal>
            <b>Think Big</b> – We believe in ambitious solutions, making exams
            smarter, fairer, and more efficient.
          </IconWithText>
          <IconWithText type="Support" horizontal>
            <b>Accessible Software</b> – We prioritize user-friendly, inclusive,
            and scalable technology.
          </IconWithText>
        </div>
        <img src={OurVisionVideo} alt="" />
      </div>

      <div className={classNames(styles.visionMission, "greyBox")}>
        <div className={styles.vision}>
          <Header1 content="Vision" />
          <p>
            To be the leading force in digital exams and assessment, setting the
            global standard for innovation, trust, and seamless educational
            technology.
          </p>
        </div>
        <div className={styles.mission}>
          <Header1 content="Mission" />
          <p>
            To empower educational institutions by providing innovative,
            reliable, and user-friendly digital assessment solutions that
            enhance the efficiency and integrity of the examination process.
          </p>
        </div>
      </div>
    </div>
  );
});

export { ValuesVisionMission };
