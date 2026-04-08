"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProjectAnalyzer from "@/components/ProjectAnalyzer";
import SmoothScroll from "@/components/SmoothScroll";
import Marquee from "@/components/animations/Marquee";

export default function Home() {
  const [analyzerOpen, setAnalyzerOpen] = useState(false);

  return (
    <SmoothScroll>
      <Navbar onAnalyze={() => setAnalyzerOpen(true)} />
      <main>
        <Hero onAnalyze={() => setAnalyzerOpen(true)} />
        <Marquee text="Dal-AI  —  Web Design  —  E-Commerce  —  Applications  —  SEO  —  Branding  —" />
        <Services />
        <Pricing />
        <Process />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ProjectAnalyzer
        isOpen={analyzerOpen}
        onClose={() => setAnalyzerOpen(false)}
      />
    </SmoothScroll>
  );
}
