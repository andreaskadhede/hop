import { forwardRef, useEffect, useState } from "react";
import styles from "./WhereWeWork.module.css";
import classNames from "classnames";

import { Header1 } from "../small/Header1/Header1";
import { Header2 } from "../small/Header2/Header2";
import { Button } from "../small/Button/Button";

import clear from "../../assets/map/Clear.svg";
import europe from "../../assets/map/Europe.svg";
import UK from "../../assets/map/UK.svg";
import nordic from "../../assets/map/Nordic.svg";
import DACH from "../../assets/map/DACH.svg";

const WhereWeWork = forwardRef<HTMLDivElement>(({}, ref) => {
   const [image, setImage] = useState<string>(clear);

   return (
      <div className={classNames(styles.whereWeWork)} ref={ref}>
         <Header1 content="Where We Work" />
         <div className={classNames(styles.mapWithBoxes)}>
            <div className={classNames(styles.areas)}>
               <div
                  className={classNames(styles.area)}
                  onMouseEnter={() => setImage(nordic)}
                  onMouseLeave={() => setImage(clear)}>
                  <Header2 content="Nordic"></Header2>
                  <p>
                     Our headquarter is in Aarhus, Denmark. We have operated in
                     the Nordics for over a decade and are partnered with higher
                     education institutions such as Aarhus University,
                     Copenhagen Business Academy and BI Norwegian Business
                     School.
                  </p>
               </div>
               <div
                  className={classNames(styles.area)}
                  onMouseEnter={() => setImage(UK)}
                  onMouseLeave={() => setImage(clear)}>
                  <Header2 content="United Kingdom"></Header2>
                  <p>
                     We opened our office in Manchester, UK, in 2019. We have
                     operated across the UK for a number of years, and are
                     partnered with higher education institutions such as UCL,
                     University of Bedfordshire and Brunel University London.
                  </p>
               </div>
               <div
                  className={classNames(styles.area)}
                  onMouseEnter={() => setImage(europe)}
                  onMouseLeave={() => setImage(clear)}>
                  <Header2 content="Europe"></Header2>
                  <p>
                     UNIwise is continuing to grow across a number of Central
                     European markets, and are already working with universities
                     such as IÉSEG School of Management, the University of Malta
                     and Universidade Aberta.
                  </p>
               </div>
               <div
                  className={classNames(styles.area)}
                  onMouseEnter={() => setImage(DACH)}
                  onMouseLeave={() => setImage(clear)}>
                  <Header2 content="DACH Region"></Header2>
                  <p>
                     We opened our office in Hamburg, Germany, in 2021. We have
                     been operating in the DACH region for the past few years
                     and work with institutions such as Erfurt University and
                     Hochschule Worms. We are continuing to expand across the
                     sector.
                  </p>
               </div>
            </div>

            <img src={image} alt="" className={classNames(styles.image)} />
         </div>
      </div>
   );
});

export { WhereWeWork };
