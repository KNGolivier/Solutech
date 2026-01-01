import "./App.css";
import Header from "./components/Header";
import ProjectsSection from "./components/ProjectsSection";
import TestimonialSection from "./components/TestimonialSection";
import PartnersSlider from "./components/PartnersSlider";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <ProjectsSection />
      <TestimonialSection />
      <PartnersSlider />
      <FaqSection />
      <Footer />
    </>
  );
}
