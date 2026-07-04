import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import ServicesSection from "./Pages/ServicesSection";
import Footer from "./Components/Footer";
import AboutSection from "./Pages/AboutSection";
import TestimonialsSection from "./Pages/TestimonialsSection";
import ContactAppointment from "./Pages/ContactAppointment";
import GallerySection from "./Pages/GallerySection"

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/testimonials" element={<TestimonialsSection />} />
        <Route path="/contact" element={<ContactAppointment />} />
        <Route path="/gallery" element={<GallerySection />} />

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;