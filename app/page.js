import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
         <div class= "container mt-24 mx-auto px-12 py-4">
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
         </div>
    </main>
  );
}
