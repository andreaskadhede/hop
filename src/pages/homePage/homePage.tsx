"use client";

import { ContactForm } from "../../components/ContactForm/ContactForm";
import { Separator } from "../../components/Separator/Separator";
import { Partners } from "../../components/Partners/Partners";
import { TextBlockWithImage } from "../../components/TextblockWithImage/TextBlockWithImage";
import { Testimonials } from "../../components/Testimonials/Testimonials";
import { WISEcon25 } from "../../components/WISEcon25/WISEcon25";

import UNIwiseVideo from "../../assets/placeholder/UNIwiseVideo.svg";
import { Facts } from "../../components/Facts/Facts";
import { Header1 } from "../../components/small/Header1/Header1";
import { Button } from "../../components/small/Button/Button";
import classNames from "classnames";
import styles from "./homePage.module.css";
import { WISEflowAndOriginality } from "../../components/WiseflowAndOriginality/WiseflowAndOriginality";
import { AboutAndBlog } from "../../components/AboutAndBlog/AboutAndBlog";

function HomePage() {
  return (
    <main style={{ paddingTop: "calc(3.125rem + 200px)" }}>
      <TextBlockWithImage
        headerContent="Hi, we're UNIwise"
        imageSrc={UNIwiseVideo}
      >
        <p style={{ fontSize: "var(--font-size-22px)" }}>
          We help universities deliver secure and accessible digital assessment
          with our end-to-end platform, WISEflow.
        </p>
      </TextBlockWithImage>
      <WISEflowAndOriginality />
      <WISEcon25 />
      <Separator />
      <div className={classNames(styles.factsContainer)}>
        <div className={classNames(styles.header)}>
          <Header1 content="More effective and authentic assessment" center />
          <p>
            WISEflow supports and handles the full workflow of assessments
            across a wide range of formative and summative assessment types,
            supporting the transformation of the assessment and feedback
            lifecycle for students, test writers, assessors and administrators.
          </p>
        </div>
        <div className={classNames(styles.facts, "greyBox")}>
          <Facts page="home" small />
          <Button
            content="Read more about WISEflow"
            path="/AboutWISEflow"
          ></Button>
        </div>
        <Partners />
      </div>
      <Separator />

      <AboutAndBlog />
      <Testimonials />
      <ContactForm />
    </main>
  );
}

export { HomePage };
