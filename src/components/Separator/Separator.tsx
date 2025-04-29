import styles from "./Separator.module.css";
import classNames from "classnames";

function Separator() {
   return <div className={classNames(styles.separator)}></div>;
}

export { Separator };
