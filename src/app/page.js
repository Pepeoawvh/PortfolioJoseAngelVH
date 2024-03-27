import HeroSection from "./components/HeroSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex flex-col bg-[#191923] w-full overflow-hidden">
      <div className={`container mt-24 mx-auto px-12 py-4`}>
        <HeroSection />
        {""}
        <ProjectsSection />
        {/* <AchievementsSection/> */}
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
