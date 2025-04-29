import styles from "./Facts.module.css";
import { IconWithText } from "../small/IconWithText/IconWithText";
import classNames from "classnames";

type FactsProps = {
   small?: boolean;
   page?: "home" | "WISEflow";
   benefitSection?: boolean;
};

function Facts({ small, page, benefitSection }: FactsProps) {
   return page === "home" ? (
      <div className={classNames(styles.facts, { [styles.small]: small })}>
         <IconWithText type="Learning">
            Realistic, contextualised assessment
         </IconWithText>
         <IconWithText type="Devices">
            Usable by everyone on their own device
         </IconWithText>
         <IconWithText type="Statistics">
            Improved workflow and feedback quality
         </IconWithText>
         <IconWithText type="Flow">
            A streamlined assessment process
         </IconWithText>
      </div>
   ) : page === "WISEflow" && benefitSection ? (
      <div className={classNames(styles.facts, { [styles.small]: small })}>
         <IconWithText type="Flow">
            Streamlines the administration and creation of assessments and
            exams.
         </IconWithText>
         <IconWithText type="Settings">
            Reduces printing costs, infrastructure expenditure and time spent
            deciphering handwriting.
         </IconWithText>
         <IconWithText type="Secure">
            Supports academic integrity via invigilation and plagiarism
            detection tools.
         </IconWithText>
         <IconWithText type="Expand">
            Can be integrated with your core data information structure, such as
            single sign-on and more.
         </IconWithText>
      </div>
   ) : (
      <div className={classNames(styles.facts, { [styles.small]: small })}>
         <IconWithText type="ThinkingBobles">
            Manages the complete assessment and feedback lifecycle across a wide
            range of assessment types and formats.
         </IconWithText>
         <IconWithText type="Flow">
            Helps universities to streamline the assessment process, ensure
            consistency, improve feedback and raise student satisfaction.
         </IconWithText>
         <IconWithText type="Statistics">
            Provides easy access for academic and administrative staff to
            create, deliver and assess multiple types and formats of exams and
            assessments.
         </IconWithText>
         <IconWithText type="Learning">
            Comes with tools to make feedback easier and more consistent, such
            as multi-level annotations and rubrics, which enhances students'
            learning and satisfaction.
         </IconWithText>
      </div>
   );
}

export { Facts };
