import NetworkBackground from "../../Components/NetworkBackground/NetworkBackground";
import Hero from "../../Components/Hero/Hero";
import WorkSection from "../../Components/WorkSection/WorkSection";
import AboutMe from "@/Components/AboutMe/AboutMe";

const HomePage = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Layer */}
      <NetworkBackground />

      {/* Foreground Content */}
      <Hero />
      <AboutMe></AboutMe>
      <WorkSection />
    </div>
  );
};

export default HomePage;
