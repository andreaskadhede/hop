import styles from "./DigitalAssessmentHub.module.css";
import classNames from "classnames";
import { Button } from "../small/Button/Button";
import { Header1 } from "../small/Header1/Header1";
import { Header2 } from "../small/Header2/Header2";

function DigitalAssessmentHub() {
   return (
      <div className={classNames(styles.digitalAssessmentHub)}>
         <Header1 content="Digital assessment hub" />
         <div className={classNames(styles.container)}>
            <div className={classNames(styles.hub)}>
               <Header2 content="Getting started with digital assessment" />
               <p>
                  There are many reasons for transitioning to a digital
                  assessment platform at your institution…
               </p>
               <Button content="learn more" />
            </div>
            <div className={classNames(styles.hub)}>
               <Header2 content="The change management process" />
               <p>
                  Let's break down the process of transitioning to digital
                  assessment and explore why effective change management is so
                  important to the success of initiatives…
               </p>
               <Button content="learn more" />
            </div>
            <div className={classNames(styles.hub)}>
               <Header2 content="Student satisfaction and digital assessment" />
               <p>
                  Institutions across the globe are increasingly moving towards
                  an online learning approach, and digital assessment platforms
                  can increase student satisfaction in a number of ways…
               </p>
               <Button content="learn more" />
            </div>
            <div className={classNames(styles.hub)}>
               <Header2 content="Easing the administrative burden" />
               <p>
                  How does transitioning to a digital assessment platform
                  lighten the administrative load for university staff?
               </p>
               <Button content="learn more" />
            </div>
            <div className={classNames(styles.hub)}>
               <Header2 content="Data privacy and digital assessment" />
               <p>
                  It’s important to understand how digital assessment platforms
                  promote and ensure data privacy to guarantee the protection of
                  staff and students alike…
               </p>
               <Button content="learn more" />
            </div>
            <div className={classNames(styles.hub)}>
               <Header2 content="Designing effective digital assessment" />
               <p>
                  How does one do digital assessment well? Based on our
                  knowledge of best practices that we’ve seen used by
                  institutions we support, here's a rundown of considerations to
                  keep in mind…
               </p>
               <Button content="learn more" />
            </div>
         </div>
      </div>
   );
}

export { DigitalAssessmentHub };
