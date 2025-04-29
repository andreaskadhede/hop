import { forwardRef, HTMLAttributes } from "react";
import styles from "./Partners.module.css";
import classNames from "classnames";

import CPHBusiness from "../../assets/partners/CPHBusiness.svg";
import DanskeProfessionsHøjskoler from "../../assets/partners/DanskeProfessionshøjskoler.svg";
import FrankfurtUniversity from "../../assets/partners/FrankfurtUniversity.svg";
import AarhusUniversitet from "../../assets/partners/AarhusUniversitet.svg";
import WarwickUniversity from "../../assets/partners/WarwickUniversity.svg";
import UniversitatErfurt from "../../assets/partners/UniversitatErfurt.svg";
import UiT from "../../assets/partners/UiT.svg";
import TheOpenUniversity from "../../assets/partners/TheOpenUniversity.svg";
import Sikt from "../../assets/partners/Sikt.svg";
import OrebroUniversitet from "../../assets/partners/OrebroUniversitet.svg";
import NorwegianBusinessSchool from "../../assets/partners/NorwegianBusinessSchool.svg";
import LinkopingUniversity from "../../assets/partners/LinkopingUniversity.svg";
import HochschuleWormsUniversity from "../../assets/partners/HochschuleWormsUniversity.svg";

const Partners = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
   () => {
      return (
         <div className={classNames(styles.partners)}>
            <div className={classNames(styles.row)}>
               <img src={AarhusUniversitet} alt="AarhusUniversitet" />
               <img src={TheOpenUniversity} alt="TheOpenUniversity" />
               <img src={FrankfurtUniversity} alt="FrankfurtUniversity" />
               <img src={WarwickUniversity} alt="WarwickUniversity" />
               <img
                  src={HochschuleWormsUniversity}
                  alt="HochschuleWormsUniversity"
               />
               <img src={Sikt} alt="Sikt" />
               <img src={UiT} alt="UiT" />
            </div>
            <div className={classNames(styles.row)}>
               <div></div>
               <img src={CPHBusiness} alt="CPHBusiness" />
               <img src={OrebroUniversitet} alt="OrebroUniversitet" />
               <img src={LinkopingUniversity} alt="LinkopingUniversity" />
               <img src={UniversitatErfurt} alt="UniversitatErfurt" />
               <img
                  src={NorwegianBusinessSchool}
                  alt="NorwegianBusinessSchool"
               />
               <img
                  src={DanskeProfessionsHøjskoler}
                  alt="DanskeProfessionsHøjskoler"
               />
               <div></div>
            </div>
         </div>
      );
   }
);

export { Partners };
