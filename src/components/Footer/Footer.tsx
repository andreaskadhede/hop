import styles from "./Footer.module.css";
import { UNIwiseLogo } from "../small/UniwiseLogo/UniwiseLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import classNames from "classnames";

function Footer() {
   return (
      <footer className={styles.footer}>
         <div className={classNames(styles.information)}>
            <div className={classNames(styles.informationText)}>
               <UNIwiseLogo alt="UNIwise logo" />
               <div className={classNames(styles.contactInfo)}>
                  <div className={classNames(styles.addresses)}>
                     <address>
                        Bredskifte Alle 15, 1.tv, 8210 Aarhus V, Denmark
                     </address>
                     <address>
                        Bartle House, 9 Oxford Court, Manchester, M2 3WQ, United
                        Kingdom
                     </address>
                  </div>
                  <a href="mailto:hello@uniwise.eu">hello@uniwise.eu</a>
               </div>
            </div>
            <div className={classNames(styles.socialMedia)}>
               <FontAwesomeIcon
                  className={classNames(styles.icon)}
                  icon={faXTwitter}
               />
               <FontAwesomeIcon
                  className={classNames(styles.icon)}
                  icon={faLinkedinIn}
               />
            </div>
         </div>
         <div className={classNames(styles.menu)}>
            <ul>
               Products
               <li>
                  <Link to="/AboutWiseflow">About Wiseflow</Link>
               </li>
               <li>
                  <Link to="/AboutOriginality">About Originality</Link>
               </li>
               <li>
                  <Link to="/Testimonials">Testimonials</Link>
               </li>
            </ul>
            <ul>
               Events
               <li>
                  <Link to="/WISEcon25">WISEcon25</Link>
               </li>
            </ul>
            <ul>
               About
               <li>
                  <Link to="/AboutUNIwise">About UNIwise</Link>
               </li>
               <li>
                  <Link to="/Careers">Careers</Link>
               </li>
               <li>
                  <Link to="/Blog">Blog</Link>
               </li>
            </ul>
            <ul>
               Contact
               <li>
                  <Link to="/ServiceCenter">Service Center</Link>
               </li>
               <li>
                  <Link to="/PartneringWithUNIwise">
                     Partnering With UNIwise
                  </Link>
               </li>
            </ul>
            <ul>
               Legal
               <li>
                  <Link to="/DataSecurity">Data security</Link>
               </li>
               <li>
                  <Link to="/PrivacyAndCookies">Privacy & cookies</Link>
               </li>
            </ul>
         </div>
      </footer>
   );
}

export { Footer };
