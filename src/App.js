import Homepage from "./Pages/HomePage";
import AboutPage from "./Pages/about";
import ServicesPage from "./Pages/services";
import ContactPage from "./Pages/contactus";
import Header from "./Component/header/mainHeader";
// import Header from "./Component/header/Header";
import Footer from "./Component/Footer/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Career from "./Pages/career";
import Privacypolicy from "./Pages/Privacy-Policy";
import Faq from "./Pages/FAQ";
import TermsofUse from "./Pages/TermsofUse";
import PortFolio from "./Pages/PortFolio";
import Industries from "./Pages/Industries";
import AllBloogPage from "./Pages/AllBloogPage";
import Single from "./Component/AllBlogs/single";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/services" element={<ServicesPage />} />

          <Route exact path="/Career" element={<Career />} />
          <Route exact path="/Privacypolicy" element={<Privacypolicy />} />
          <Route exact path="/faq" element={<Faq />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/termsofuse" element={<TermsofUse />} />
          <Route exact path="/portfolio" element={<PortFolio />} />
          <Route exact path="/industries" element={<Industries />} />
          <Route exact path="/AllBloogPage" element={<AllBloogPage />} />
          <Route exact path="/single/:id" element={<Single />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

//  font-family: 'Whyte-Medium';

//  font-family: 'Whyte-Regular';

//  font-family: 'Whyte-Bold';

//  font-family: 'Whyte-Light';

//  font-family: 'Whyte-BoldItalic';

// font-family: 'Whyte-Book';
