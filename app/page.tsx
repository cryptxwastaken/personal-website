import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectModal } from "@/components/ProjectModal";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { Toast } from "@/components/Toast";
import { UiProvider } from "@/components/providers/UiProvider";

export default function Home() {
  return (
    <UiProvider>
      <Header />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 space-y-16">
        <Hero />
        <ProjectsSection />
        <ExperienceSection />
      </main>
      <Footer />
      <ProjectModal />
      <Toast />
    </UiProvider>
  );
}
