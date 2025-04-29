import { forwardRef } from "react";
import { Header1 } from "../small/Header1/Header1";

import arrow from "../../assets/arrow.svg";
import { SpeakingBoble } from "../small/SpeakingBoble/SpeakingBoble";

const OurStory = forwardRef<HTMLDivElement>(({}) => {
   return (
      <div>
         <div>
            <Header1 content="Our Story" center />
            <p>
               Our founders met in 2010, when they were both working at the
               University of Aarhus.
            </p>
         </div>
         <div>
            <img src={arrow} alt="" />
         </div>
         <SpeakingBoble
            headerContent="The birth of UNIwise"
            text="Steffen Skovfoged, working in the registrar’s office, knew how onerous the administration of the assessment process could be for staff. Rasmus Blok, coming from research within teaching and learning, understood the pedagogical possibilities technology could open up. They met while leading a project that scoped how technology could be used to optimise the assessment process."
            year={2012}
         />
      </div>
   );
});

export { OurStory };
