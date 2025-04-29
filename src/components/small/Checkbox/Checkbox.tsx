import { forwardRef } from "react";
import styles from "./Checkbox.module.css";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import * as RadixCheckbox from "@radix-ui/react-checkbox";

const Checkbox = forwardRef<HTMLButtonElement, RadixCheckbox.CheckboxProps>(
   () => {
      return (
         <>
            <RadixCheckbox.Root
               className={classNames(styles.checkbox)}
               defaultChecked
               id="c1">
               <RadixCheckbox.Indicator
                  className={classNames(styles.checkboxIndicator)}>
                  <FontAwesomeIcon
                     className={classNames(styles.checkIcon)}
                     icon={faCheck}
                  />
               </RadixCheckbox.Indicator>
            </RadixCheckbox.Root>
         </>
      );
   }
);

export { Checkbox };
