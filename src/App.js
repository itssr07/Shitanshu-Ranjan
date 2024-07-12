import { Routes, Route } from "react-router-dom";
import { AboutPage, GalleryPage, Homepage, ServicesPage, SupportPage } from "./Pages";
import Navbar from "./layouts/Navbar/Navbar";
import Footer from "./layouts/Footer/Footer";



function App() {
  return (
    <div>
      <Navbar />

     
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<SupportPage />} />
        <Route path="/service" element={<ServicesPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
