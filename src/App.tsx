import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { HomePage } from "./pages/homePage/homePage";
// import { AboutOriginalityPage } from "./pages/aboutOriginalityPage/aboutOriginalityPage.js";
import { AboutUNIwisePage } from "./pages/aboutUNIwisePage/aboutUNIwisePage";
import { AboutWISEflowPage } from "./pages/aboutWISEflowPage/aboutWISEflowPage";
import ScrollToTop from "./components/small/ScrolToTop.js";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <BrowserRouter basename="/">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/AboutOriginality" element={<AboutOriginalityPage />} /> */}
        <Route path="/AboutUNIwise" element={<AboutUNIwisePage />} />
        <Route path="/AboutWISEflow" element={<AboutWISEflowPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
