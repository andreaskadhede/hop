import { useState } from "react";
import styles from "./Header.module.css";
import classNames from "classnames";
import { NavLink, useLocation } from "react-router";
import { UNIwiseLogo } from "../small/UniwiseLogo/UniwiseLogo";
import { Button } from "../small/Button/Button";

function Header() {
   const [openDropdown, setOpenDropdown] = useState<null | string>(null);

   const toggleDropdown = (name: string) => {
      setOpenDropdown((prev) => (prev === name ? null : name));
   };

   const location = useLocation();
   const isProductsActive = ["/AboutOriginality", "/AboutWISEflow"].includes(
      location.pathname
   );
   const isAboutActive = ["/AboutUNIwise"].includes(location.pathname);
   const isEventsActive = ["/WISEcone25"].includes(location.pathname);
   const isContactActive = [
      "/ServiceCenter",
      "/PartneringWithUNIwise",
   ].includes(location.pathname);
   const isHomeActive = ["/"].includes(location.pathname);

   return (
      <header className={classNames(styles.header)}>
         <UNIwiseLogo blue />
         <nav className={classNames(styles.navbar)}>
            <ul className={classNames(styles.menu)}>
               <li>
                  <NavLink
                     to="/"
                     className={classNames({ [styles.active]: isHomeActive })}>
                     Home
                  </NavLink>
               </li>
               <li
                  className={classNames({ [styles.active]: isProductsActive })}
                  onClick={() => {
                     toggleDropdown("products");
                  }}
                  onMouseLeave={() => setOpenDropdown(null)}>
                  Products
                  <ul
                     className={styles.dropdown}
                     style={{
                        display: openDropdown === "products" ? "flex" : "none",
                     }}>
                     <li>
                        <NavLink to="/AboutWISEflow">About WISEflow</NavLink>
                     </li>
                     <li>
                        <NavLink to="/AboutOriginality">
                           About Originality
                        </NavLink>
                     </li>
                     <li>
                        <NavLink to="/Testimonials">Testimonials</NavLink>
                     </li>
                  </ul>
               </li>
               <li
                  className={classNames({ [styles.active]: isEventsActive })}
                  onClick={() => toggleDropdown("events")}
                  onMouseLeave={() => setOpenDropdown(null)}>
                  Events
                  <ul
                     className={classNames(styles.dropdown)}
                     style={{
                        display: openDropdown === "events" ? "flex" : "none",
                     }}>
                     <li>
                        <NavLink to="/WISEcone25">WISEcon25</NavLink>
                     </li>
                  </ul>
               </li>
               <li
                  className={classNames({ [styles.active]: isAboutActive })}
                  onClick={() => toggleDropdown("about")}
                  onMouseLeave={() => setOpenDropdown(null)}>
                  About
                  <ul
                     className={styles.dropdown}
                     style={{
                        display: openDropdown === "about" ? "flex" : "none",
                     }}>
                     <li>
                        <NavLink to="/AboutUNIwise">About UNIwise</NavLink>
                     </li>
                     <li>
                        <NavLink to="/Careers">Careers</NavLink>
                     </li>
                     <li>
                        <NavLink to="/Blog">Blog</NavLink>
                     </li>
                  </ul>
               </li>
               <li
                  className={classNames({ [styles.active]: isContactActive })}
                  onClick={() => toggleDropdown("Contact")}
                  onMouseLeave={() => setOpenDropdown(null)}>
                  Contact
                  <ul
                     className={styles.dropdown}
                     style={{
                        display: openDropdown === "Contact" ? "flex" : "none",
                     }}>
                     <li>
                        <NavLink to="/ServiceCenter">Service Center</NavLink>
                     </li>
                     <li>
                        <NavLink to="/PartneringWithUNIwise">
                           Partnering With UNIwise
                        </NavLink>
                     </li>
                  </ul>
               </li>
            </ul>
            <Button content="Request a Demo" path="/Demo" />
         </nav>
      </header>
   );
}

export { Header };
