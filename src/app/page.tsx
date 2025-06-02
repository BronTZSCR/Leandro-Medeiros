"use client";

import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
export default function HomePage() {
  return <main className="min-h-screen" data-unique-id="4ea3436e-29ba-461f-b1d5-86a4200d008f" data-file-name="app/page.tsx">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>;
}