import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import ExpertiseSection from "./components/ExpertiseSection";
import ProjectsSection from "./components/ProjectsSection";
import TestimonialSection from "./components/TestimonialSection";
import PartnersSlider from "./components/PartnersSlider";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";

import CloudPage from "./pages/CloudPage";
import CybersecuritePage from "./pages/CybersecuritePage";
import DeveloppementPage from "./pages/DeveloppementPage";

export default function App() {
  return (
    <Routes>
      {/* HOME */}
      <Route
        path="/"
        element={
          <>
            <Header />
            <ExpertiseSection />
            <ProjectsSection />
            <TestimonialSection />
            <PartnersSlider />
            <FaqSection />
            <Footer />
          </>
        }
      />

      {/* CLOUD */}
      <Route path="/services/cloud" element={<CloudPage />} />
      <Route path="/services/cybersecurite" element={<CybersecuritePage />} />
      <Route path="/services/developpement" element={<DeveloppementPage />} />
    </Routes>
  );
}
