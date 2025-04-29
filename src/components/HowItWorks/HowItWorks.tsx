import styles from "./HowItWorks.module.css";
import { IconWithText } from "../small/IconWithText/IconWithText";
import classNames from "classnames";
import { Header1 } from "../small/Header1/Header1";
import { Header2 } from "../small/Header2/Header2";

type HowItWorksProps = {
   page?: "WISEflow" | "Originality";
};

function HowItWorks({ page }: HowItWorksProps) {
   return page === "WISEflow" ? (
      <div className={classNames(styles.howItWorks)}>
         <div className={classNames(styles.textArea)}>
            <Header1 content="How it Works" />
            <Header2 content="In WISEflow, the assessment process is referred to as a flow." />
            <div className={classNames(styles.text)}>
               <p>
                  The platform has a range of flow types that supports different
                  assessment formats that can be employed for both formative and
                  summative assessments. 
               </p>
               <p>
                  The system is role-based. Different roles carry out different
                  tasks at various points during the set up/running of a flow
                  (assessment process).  
               </p>
               <p>
                  Flows can be configured and combined to support the desired
                  assessment type. The flow type determines what answers can be
                  submitted and the security level. What’s more, several of the
                  flow types are specially designed for supporting group
                  assessments.  
               </p>
            </div>
         </div>

         <div className={classNames(styles.flow)}>
            <IconWithText type="FixToTheRight" horizontal>
               The manager sets up the assessment for the participants.
            </IconWithText>
            <IconWithText type="Checklist" horizontal>
               Authors write the assessment questions.
            </IconWithText>
            <IconWithText type="StopWatch" horizontal>
               Invigilators monitor the exam or assessment live.
            </IconWithText>
            <IconWithText type="CheckBoble" horizontal>
               Assessors grade the participants’ work.
            </IconWithText>
         </div>
      </div>
   ) : page === "Originality" ? (
      <div className={classNames(styles.howItWorks)}>
         <div className={classNames(styles.textArea)}>
            <Header1 content="How it Works" />
            <Header2 content="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />
            <div className={classNames(styles.text)}>
               <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Corporis laborum odio dicta officiis provident porro autem.
                  Harum similique, odio, animi reiciendis omnis amet nemo fuga
                  dignissimos consequuntur placeat distinctio temporibus.
               </p>
               <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cumque distinctio dolorum dicta quidem aperiam eveniet sequi
                  quas rerum, aliquam labore deserunt minima, doloribus
                  quibusdam nobis eos, deleniti est consectetur odit?
               </p>
               <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Obcaecati, amet quam nobis, quaerat vero officia saepe tempore
                  nostrum nesciunt illo at explicabo cum, hic sit laborum eos
                  sunt. Suscipit, exercitationem.
               </p>
            </div>
         </div>

         <div className={classNames(styles.flow)}>
            <IconWithText type="FixToTheRight" horizontal>
               Lorem ipsum dolor sit amet consectetur adipisicing.
            </IconWithText>
            <IconWithText type="FixToTheRight" horizontal>
               Lorem ipsum dolor, sit amet consectetur adipisicing.
            </IconWithText>
            <IconWithText type="FixToTheRight" horizontal>
               Lorem ipsum, dolor sit amet consectetur adipisicing.
            </IconWithText>
            <IconWithText type="FixToTheRight" horizontal>
               Lorem ipsum dolor sit, amet consectetur adipisicing.
            </IconWithText>
         </div>
      </div>
   ) : (
      <p>How it works</p>
   );
}

export { HowItWorks };
