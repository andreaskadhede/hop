import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { HomePage } from "./pages/homePage/homePage.js";
import { AboutOriginalityPage } from "./pages/aboutOriginalityPage/aboutOriginalityPage.js";
import { AboutUNIwisePage } from "./pages/aboutUNIwisePage/aboutUNIwisePage.js";
import { AboutWISEflowPage } from "./pages/aboutWISEflowPage/aboutWISEflowPage.js";

function App() {
   return (
      <>
         <Header />
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
               path="/AboutOriginality"
               element={<AboutOriginalityPage />}
            />
            <Route path="/AboutUNIwise" element={<AboutUNIwisePage />} />
            <Route path="/AboutWISEflow" element={<AboutWISEflowPage />} />
            <Route path="*" element={<Navigate to="/" />} />
         </Routes>
         <Footer />
      </>
   );
}

export default App;
