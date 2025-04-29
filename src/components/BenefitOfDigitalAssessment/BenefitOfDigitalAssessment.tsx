import styles from "./BenefitOfDigitalAssessment.module.css";
import classNames from "classnames";
import { Header1 } from "../small/Header1/Header1";
import { Facts } from "../Facts/Facts";

function BenefitOfDigitalAssessment() {
   return (
      <div className={classNames(styles.benefitOfDigitalAssessment)}>
         <div className={classNames(styles.header)}>
            <Header1 content="Benefit of Digital Assessment" />
            <p>
               WISEflow supports and handles the full workflow of assessments
               across a wide range of formative and summative assessment types,
               supporting the transformation of the assessment and feedback
               lifecycle for students, test writers, assessors and
               administrators.
            </p>
         </div>
         <div className={classNames(styles.facts)}>
            <Facts page="WISEflow" benefitSection />
            <p className={classNames(styles.condition)}>
               In short, digital assessment supports your strategy to extend
               your institution’s global reach: assessment any time, from
               anywhere.
            </p>
         </div>
         <div className={classNames(styles.quote)}>
            <q>
               The WISEflow learning analytics tool has been incredibly useful
               for us in terms of being able to monitor our students and their
               progress, and make sure our classes are planned accordingly.
               Students can get immediate feedback, and it saves time on marking
               and grading .
            </q>
            <p>
               Lezel Roddeck, Director, Foreign Language Communication, Bucerius
               Law School
            </p>
         </div>
      </div>
   );
}

export { BenefitOfDigitalAssessment };
