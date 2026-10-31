"use client";

import AboutSection from "@/components/AboutSection";
import ContactUs from "@/components/ContactUs";
import Herosection from "@/components/homesection";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <div>
      <Herosection />
      <AboutSection />
      <ProjectSection />
      <ContactUs />
    </div>
  );
}
