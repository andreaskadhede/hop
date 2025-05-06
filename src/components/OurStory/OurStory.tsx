import { forwardRef } from "react";
import styles from "./OurStory.module.css";
import { Header1 } from "../small/Header1/Header1";

import arrow from "../../assets/arrow.svg";
import { SpeakingBoble } from "./SpeakingBoble/SpeakingBoble";
import classNames from "classnames";

const OurStory = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className={classNames(styles.ourStory)} ref={ref}>
      <div className={classNames(styles.text)}>
        <Header1 content="Our Story" center />
        <p>
          Our founders met in 2010, when they were both working at the
          University of Aarhus.
        </p>
      </div>
      <div className={classNames(styles.timeline)}>
        <div className={classNames(styles.timelineContentTop)}>
          <SpeakingBoble
            headerContent="The birth of UNIwise"
            text="Steffen Skovfoged, working in the registrar’s office, knew how onerous the administration of the assessment process could be for staff. Rasmus Blok, coming from research within teaching and learning, understood the pedagogical possibilities technology could open up. They met while leading a project that scoped how technology could be used to optimise the assessment process."
            year={2012}
          />
          <SpeakingBoble
            headerContent="Our first successes"
            text="This belief in the platform was soon vindicated by the award of the contract for a number of Danish University colleges, Business Academies and Schools of Marine and Technical Engineering. By 2016, nearly half of Norway’s higher-education institutions had begun working with UNIwise. As interest in digital assessment grew across institutions worldwide, Steffen and Rasmus travelled to meet with higher-education professionals around the globe to see how WISEflow could help them achieve their digital aspirations."
            year={2016}
          />
          <SpeakingBoble
            headerContent="A decade strong"
            text="In 2022, we celebrated our 10-year anniversary. From starting as a cross-university project out of Aarhus University to operating across Europe and providing a digital assessment platform for students across the globe, we look forward to continuing to champion digital assessment on the global stage and supporting the HE sector to transform education."
            year={2022}
          />
        </div>
        <img src={arrow} alt="timeline arrow" />
        <div className={classNames(styles.timelineContentBottom)}>
          <SpeakingBoble
            headerContent="Challenges begin to mount"
            text="After spending a year and a half developing the platform, money was running low by 2013. Then our landlord filed for bankruptcy, and suddenly we were without an office space to call our own. With no money to spend on renting a new office, the team found an old, closed property without heating or internet. And this is where work continued over that winter, with everyone wearing hats and gloves while coding, tethering to a single Android Wi-Fi hotspot, and agreeing to cut their salaries in half. Despite the cold and the slow connection, no one ever lost faith in WISEflow."
            year={2013}
            direction="up"
          />

          <SpeakingBoble
            headerContent="Expansion"
            text="In order to better serve customers by providing local in-depth knowledge and expertise, as of 2021, we have offices in Denmark, Norway, the UK and Germany. We now work with institutions in 15 countries, and as that number grows, we will remain committed to leading and supporting higher-education institutions on their journey to transform their assessment practices. "
            year={2021}
            direction="up"
          />
        </div>
      </div>
    </div>
  );
});

export { OurStory };
