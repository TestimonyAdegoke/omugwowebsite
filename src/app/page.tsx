"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Segments from "@/components/Segments";
import About from "@/components/About";
import IntroVideo from "@/components/IntroVideo";
import TrustedAlly from "@/components/TrustedAlly";
import Services from "@/components/Services";
import Podcast from "@/components/Podcast";
import OmugwoStory from "@/components/OmugwoStory";
import Courses from "@/components/Courses";
import CTASection from "@/components/CTASection";
import Resources from "@/components/Resources";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Segments />
      <About />
      <IntroVideo />
      <TrustedAlly />
      <Services />
      <Podcast />
      <OmugwoStory />
      <Courses />
      <CTASection />
      <Resources />
      <FAQ />
      <Footer />
    </main>
  );
}
