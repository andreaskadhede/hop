import styles from "./NotFoundPage.module.css";

import classNames from "classnames";
import { Button } from "../../components/small/Button/Button";
import { Header1 } from "../../components/small/Header1/Header1";
import { Header2 } from "../../components/small/Header2/Header2";

function NotFoundPage() {
  return (
    <main className={classNames(styles.notFoundPage)}>
      <article>
        <Header1 content="404: Page not found" center />
        <div>
          <Header2 content="Oops! This page didn’t pass the test." center />
          <p>
            It might have been moved, deleted, or never existed in the first
            place.
          </p>
        </div>
        <Button content="Back to home page" path="/" />
      </article>
    </main>
  );
}

export { NotFoundPage };
