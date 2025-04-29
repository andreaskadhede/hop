import styles from "./ContactForm.module.css";
import classNames from "classnames";
import { Button } from "../small/Button/Button";
import { Header1 } from "../small/Header1/Header1";
import { Checkbox } from "../small/Checkbox/Checkbox";

function ContactForm() {
   return (
      <div className={classNames(styles.contactForm)}>
         <div className={classNames(styles.textArea)}>
            <Header1 content="Contact" center />
            <p>
               Learn how innovators at institutions across Europe have
               successfully made their cases.
            </p>
         </div>
         <form action="" className={classNames(styles.form)}>
            <label>
               Email*
               <input required type="text" name="email" />
            </label>
            <label>
               Job title*
               <input required type="text" name="job-title" />
            </label>
            <label>
               Last name*
               <input required type="text" name="last-name" />
            </label>
            <label>
               First name*
               <input required type="text" name="first-name" />
            </label>
            <label>
               Company name*
               <input required type="text" name="company-name" />
            </label>
         </form>
         <div className={classNames(styles.checkboxArea)}>
            <p>
               UNIwise ApS is committed to protecting and respecting your
               privacy, and we’ll only use your personal information to
               administer your account and to provide the products and services
               you requested from us. From time to time, we would like to
               contact you about our products and services, as well as other
               content that may be of interest to you. If you consent to us
               contacting you for this purpose, please tick below to say how you
               would like us to contact you:
            </p>
            <label>
               <Checkbox></Checkbox>
               <p>I agree to receive other communications from UNIwise ApS.</p>
            </label>
            <p>
               You can unsubscribe from these communications at any time. For
               more information on how to unsubscribe, our privacy practices,
               and how we are committed to protecting and respecting your
               privacy, please review our Privacy Policy. By clicking submit
               below, you consent to allow UNIwise ApS to store and process the
               personal information submitted above to provide you the content
               requested.
            </p>
         </div>
         <Button content="Submit" type="submit" />
      </div>
   );
}

export { ContactForm };
