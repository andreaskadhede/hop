import { Separator } from "../../components/Separator/Separator";
import { WhereWeWork } from "../../components/WhereWeWork/WhereWeWork";
import { Header1 } from "../../components/small/Header1/Header1";
import styles from "./aboutUNIwisePage.module.css";

import RasmusAndSteffen from "../../assets/images/rasmus-and-steffen.svg";
import GroupPhoto from "../../assets/images/group-photo.svg";
import Office from "../../assets/images/office.svg";

import classNames from "classnames";
import { OurStory } from "../../components/OurStory/OurStory";
import { ValuesVisionMission } from "../../components/ValuesVisionMission/ValuesVisionMission";

function AboutUNIwisePage() {
  return (
    <main style={{ paddingBottom: "0" }}>
      <div className={classNames(styles.hero)}>
        <img src={RasmusAndSteffen} alt="" />
        <div className={classNames(styles.quote)}>
          <q>
            WISEflow is a powerful platform, but we know that technology isn’t
            the answer to everything. Where we really add value is in our
            expertise, drawn from working in higher education ourselves and a
            decade of partnering to support digital assessment transformation.
            We know what works.
          </q>
          <p>Rasmus Blok, Co-founder and Executive Director</p>
        </div>
      </div>
      <ValuesVisionMission />
      <Separator />
      <OurStory />
      <div className={classNames(styles.whoWeAre)}>
        <img src={Office} alt="" />
        <div className={classNames(styles.text)}>
          <Header1 white content="Who We Are" />
          <p>
            UNIwise is an established European edtech company that provides a
            dedicated digital assessment platform for higher education.
            Assessment is a crucial element of education, and we lead and
            support higher-education institutions on their journey of the
            transformation of their assessment practices.  
          </p>
        </div>
      </div>
      <WhereWeWork />
      <img className={classNames(styles.heroImage)} src={GroupPhoto} alt="" />
    </main>
  );
}

export { AboutUNIwisePage };
