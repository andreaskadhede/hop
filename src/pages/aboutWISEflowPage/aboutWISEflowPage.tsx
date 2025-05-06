import { TextBlockWithImage } from "../../components/TextblockWithImage/TextBlockWithImage";
import WISEflowVideo from "../../assets/placeholder/WISEflowVideo.svg";
import { Separator } from "../../components/Separator/Separator";
import { Slider } from "../../components/Slider/Slider";
import { Products } from "../../components/Products/Products";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { DigitalAssessmentHub } from "../../components/DigitalAssessmentHub/DigitalAssessmentHub";
import { BenefitOfDigitalAssessment } from "../../components/BenefitOfDigitalAssessment/BenefitOfDigitalAssessment";
import { Facts } from "../../components/Facts/Facts";
import { HowItWorks } from "../../components/HowItWorks/HowItWorks";
import { MainCapabilities } from "../../components/MainCapabilities/MainCapabilities";

function AboutWISEflowPage() {
  return (
    <main>
      <div className="greyFullBox">
        <TextBlockWithImage
          headerContent="WISEflow"
          subheaderContent="An end-to-end digital assessment platform"
          imageSrc={WISEflowVideo}
        >
          <p>
            UNIwise helps institutions transform the creation, management and
            delivery of exams and assessments for staff and students with our
            digital assessment platform, WISEflow.
          </p>
        </TextBlockWithImage>
      </div>

      <HowItWorks page="WISEflow" />
      <MainCapabilities page="WISEflow" />
      <div
        className="greyBox"
        style={{
          width: "calc(100vw - var(--padding-156) - var(--padding-75))",
        }}
      >
        <Facts page="WISEflow" />
      </div>
      <Separator />
      <Slider
        white
        slider1={{
          header: "Academic integrity",
          text: "WISEflow offers a number of features to ensure your institution's exams are secure, and academic integrity is maintained.",
        }}
        slider2={{
          header: "Secure exams",
          text: "WISEflow offers a lockdown browser, which turns the candidate's device into a secure workstation, with access only to pre-authorised resources, applications and tools. Once secured, the device can keep running the exam even if connection to the internet is lost. All work is saved automatically and continuously.",
        }}
        slider3={{
          header: "Invigilation",
          text: "During live exams, invigilators can monitor and interrogate candidate performance electronically. Candidates' status, progress and their devices can be identified, and suspicious behaviour automatically reported and further investigated. Candidates can be notified during an exam and reception observed.",
        }}
        slider4={{
          header: "Plagiarism detection",
          text: "Submitted work can be run through your preferred plagiarism detection tool. We are integrated with leading plagiarism detection solution Turnitin, and you will seamlessly be able to access the similarity report when assessing the candidate's submissions.",
        }}
        slider5={{
          header: "Remote proctoring",
          text: "Facial comparison and ML can be switched on directly within the platform. When enabled, pictures are taken using webcams at random intervals. An authenticity score is calculated and Invigilators can review the image matches through the dashboard to determine whether something warrants further scrutiny after the exam.",
        }}
        slider6={{
          header: "Device monitor",
          text: "Provides new layer of integrity checking for assessments that are not locked down, helping Invigilator to determine if assessment guidelines are adhered to. Random interval screenshots of participant’s screen(s) are recorded throughout flow period, which are accessible both live and post-assessment.",
        }}
      />
      <Products productPage={"WISEflow"} />

      <BenefitOfDigitalAssessment />
      <Slider
        slider1={{
          header:
            "Deliver on student expectations: timely, transparent, meaningful feedback ",
          text: "WISEflow enables more detailed and personalised feedback, including comments, annotations, and multimedia elements, to support students’ learning and development. Students have access to their graded assessments, feedback, and rubrics, helping them understand the evaluation criteria and learning objectives better.",
        }}
        slider2={{
          header: "Build resilience in your future assessment strategy ",
          text: "Embracing digital assessment allows HEIs to adapt more quickly to unforeseen events or disruptions and ensure continuity in their educational processes with minimal disruption. Digital assessment methods also promote flexibility, making it easier to accommodate different learning styles and preferences.",
        }}
        slider3={{
          header:
            "Integrate your assessment workflows and data with existing institutional infrastructure ",
          text: "WISEflow offers seamless integration with institutional software, such as student information systems, streamlining assessment practices by centralising data and improving efficiency and reducing administrative burden.",
        }}
        slider4={{
          header:
            "Ensure academic integrity through a breadth of assessment types ",
          text: "WISEflow enables a variety of assessment types beyond traditional exams, ensuring that students' skills and knowledge are evaluated in multiple dimensions, reducing the risk of cheating or and mitigating the impact of AI. Plagiarism and proctoring features also help support academic integrity.",
        }}
      />

      <DigitalAssessmentHub />

      <ContactForm />
    </main>
  );
}

export { AboutWISEflowPage };
