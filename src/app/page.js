"use client"
import HeroSection from "./components/HeroSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex flex-col bg-[#191923] w-full overflow-hidden">
      <section className={`container mx-auto pt-16 px-12 `}>
        <HeroSection />
        {""}
        <ProjectsSection />
        {/* <AchievementsSection/> */}
        <EmailSection />
      </section>
    </main>
  );
}
