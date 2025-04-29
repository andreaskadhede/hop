import { TextBlockWithImage } from "../../components/TextblockWithImage/TextBlockWithImage";
import { Separator } from "../../components/Separator/Separator";
import { Slider } from "../../components/Slider/Slider";
import { Products } from "../../components/Products/Products";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { DigitalAssessmentHub } from "../../components/DigitalAssessmentHub/DigitalAssessmentHub";
import { BenefitOfDigitalAssessment } from "../../components/BenefitOfDigitalAssessment/BenefitOfDigitalAssessment";
import { Facts } from "../../components/Facts/Facts";
import { HowItWorks } from "../../components/HowItWorks/HowItWorks";
import { Header1 } from "../../components/small/Header1/Header1";
import OriginalityVideo from "../../assets/placeholder/OriginalityVideo.svg";
import placeholder from "../../assets/placeholder/OriginalityVideo.svg";

function AboutOriginalityPage() {
   return (
      <main>
         <TextBlockWithImage
            headerContent="Originality"
            subheaderContent="Ensure Academic Integrity with AI-Powered Plagiarism Detection"
            imageSrc={OriginalityVideo}>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac
               massa turpis. Suspendisse potenti. Praesent hendrerit neque sit
               amet nulla accumsan rutrum. Quisque eget neque non arcu faucibus
               consequat ac nec est. In sed purus dui. Nullam at ante
               scelerisque, semper arcu eget, pellentesque leo. In viverra
               aliquam mattis. Proin sodales maximus felis, sit amet placerat
               dolor vulputate id. Praesent ac maximus sem. Curabitur nibh
               metus, posuere et blandit at, tincidunt id dui.
            </p>
         </TextBlockWithImage>
         <HowItWorks page="Originality" />

         <Separator />
         <div>
            <Header1 content="Main Capabilities" center />
            <TextBlockWithImage
               imageSrc={placeholder}
               imagePlacement="left"
               imageSize="small">
               <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, dignissimos itaque in dolor earum similique
                  consectetur rerum voluptatem, cupiditate nostrum soluta ea
                  maxime porro accusamus esse nesciunt quia? Repellendus
                  repudiandae, quod est nihil quas numquam, suscipit rerum
                  pariatur, obcaecati assumenda commodi debitis adipisci
                  corrupti. Inventore molestiae illo cumque fugit tempore.
               </p>
            </TextBlockWithImage>
            <TextBlockWithImage imageSrc={placeholder} imageSize="small">
               <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, dignissimos itaque in dolor earum similique
                  consectetur rerum voluptatem, cupiditate nostrum soluta ea
                  maxime porro accusamus esse nesciunt quia? Repellendus
                  repudiandae, quod est nihil quas numquam, suscipit rerum
                  pariatur, obcaecati assumenda commodi debitis adipisci
                  corrupti. Inventore molestiae illo cumque fugit tempore.
               </p>
            </TextBlockWithImage>
            <TextBlockWithImage
               imageSrc={placeholder}
               imagePlacement="left"
               imageSize="small">
               <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, dignissimos itaque in dolor earum similique
                  consectetur rerum voluptatem, cupiditate nostrum soluta ea
                  maxime porro accusamus esse nesciunt quia? Repellendus
                  repudiandae, quod est nihil quas numquam, suscipit rerum
                  pariatur, obcaecati assumenda commodi debitis adipisci
                  corrupti. Inventore molestiae illo cumque fugit tempore.
               </p>
            </TextBlockWithImage>
         </div>

         <Slider
            slider1={{
               text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ab incidunt saepe veniam ipsa animi, in, voluptas minima repudiandae natus sed nulla et? Aperiam deleniti nulla velit reiciendis, quae sapiente!",
            }}
         />

         <TextBlockWithImage
            headerContent="Easy Integration"
            imageSrc={placeholder}
            imagePlacement="left"
            imageSize="small">
            <p>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               Voluptatibus quasi beatae laudantium, doloremque perferendis et
               adipisci, cupiditate illo voluptate iure dolorum. Pariatur
               tenetur, mollitia recusandae corrupti, impedit quaerat a expedita
               omnis suscipit laborum non neque placeat dolores eius, iure
               doloremque alias. In rem quam corporis ducimus quaerat iure
               molestias voluptatibus!
            </p>
         </TextBlockWithImage>
         <Products productPage="Originality" />
         <ContactForm />
      </main>
   );
}

export { AboutOriginalityPage };
