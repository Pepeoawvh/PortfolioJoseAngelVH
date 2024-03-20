import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#191923]">
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        {""}
        <ProjectsSection />
        <AchievementsSection/>
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
