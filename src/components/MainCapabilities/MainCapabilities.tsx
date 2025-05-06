import { useState } from "react";
import styles from "./MainCapabilities.module.css";
import classNames from "classnames";
import { Header1 } from "../small/Header1/Header1";
import { Header2 } from "../small/Header2/Header2";

import flow from "../../assets/images/mockup/participant-flow-mockup.svg";
import overview from "../../assets/images/mockup/participant-overview-mockup.svg";
import author from "../../assets/images/mockup/author-mockup.svg";
import marking from "../../assets/images/mockup/marking-mockup.svg";
import managing from "../../assets/images/mockup/managing-mockup.svg";

type MainCapabilitiesProps = {
  page?: "WISEflow" | "Originality";
};

type Section = {
  title: string;
  content: string;
  image: string;
};

const sections: Section[] = [
  {
    title: "Participant FLOW",
    content:
      "The page may look slightly different depending on the flow type and what stage the flow is in. Below is an example for file based examinations in the Open for participation stage.",
    image: flow,
  },
  {
    title: "Participation Overview",
    content:
      "After logging in, you are directed to the overview page which shows a list of all the active flows to which you have been allocated. From here, you can also access demo flows and the archive where you can see any finished and archived flows.",
    image: overview,
  },
  {
    title: "Author",
    content:
      "The landing page for the Author is shown below and provides access to: Assignments, Content Bank, Associated Flows, Rubrics, Author Groups and Assignments (Legacy)",
    image: author,
  },
  {
    title: "Marking",
    content:
      "The Marking tab in WISEflow contains all the tools and processes for marking and the landing page is shown below. The Reviewer tab is where moderation activity takes place.",
    image: marking,
  },
  {
    title: "Managing",
    content:
      "The flow overview is the first thing you see when you open up the managing role in WISEflow. In this flow overview, we have created a couple of different ways to filter and sort which types of flows you would like to see in your list of flows. We refer to these settings as the manager's dashboard.",
    image: managing,
  },
];

const MainCapabilities = ({ page }: MainCapabilitiesProps) => {
  const [isShowing, setIsShowing] = useState<number | null>(0);
  const [imageSrc, setImageSrc] = useState<string>(flow);
  const [title, setTitle] = useState<string>(sections[0].title);

  const handleClick = (index: number, image: string) => {
    setIsShowing(isShowing === index ? 0 : index);
    setImageSrc(image);
    setTitle(sections[index].title);
  };

  return page === "WISEflow" ? (
    <div className={classNames(styles.mainCapabilities)}>
      <div className={classNames(styles.textArea)}>
        <Header1 content="Main Capabilities" />
        {sections.map((section, index) => (
          <div
            key={index}
            className={classNames(styles.section, {
              [styles.inactive]: isShowing !== index,
            })}
          >
            <button onClick={() => handleClick(index, section.image)}>
              <Header2 content={section.title} />
            </button>
            <p
              // style={{
              //   height: isShowing === index ? "100%" : "0",
              //   opacity: isShowing === index ? 1 : 0,
              // }}
              className={classNames(styles.paragraph, {
                [styles.show]: isShowing === index,
              })}
            >
              {section.content}
            </p>
          </div>
        ))}
      </div>
      <div className={classNames(styles.imageArea)}>
        <img src={imageSrc} alt={title} />
      </div>
    </div>
  ) : page === "Originality" ? (
    <div className={classNames(styles.MainCapabilities)}>
      Under construction
    </div>
  ) : (
    <div className={classNames(styles.MainCapabilities)}>No page found</div>
  );
};

export { MainCapabilities };
