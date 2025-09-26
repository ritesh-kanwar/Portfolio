import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

import { ToastProvider } from "../components/Toast";


export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        { /* Theme toggle */}
        <ThemeToggle/>
        { /* Background Effects */}
        <StarBackground/>
        { /* NavBar*/}
        <Navbar/>
        { /* Main Content */}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ToastProvider>
                <ContactSection />
            </ToastProvider>

        </main>
        { /* Footer */}
        <Footer />

    </div>;
}
