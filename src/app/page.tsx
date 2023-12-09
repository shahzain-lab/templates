import React from "react";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import GetQuote from "@/components/home/GetQuote";
import Features from "@/components/home/Features";
import Pricing from "@/components/home/Pricing";
import Testmonials from "@/components/home/Testmonials";
import Blogs from "@/components/home/Blogs";
import Records from "@/components/home/Records";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <GetQuote />
      <Features />
      <Records />
      <Pricing />
      <Testmonials />
      <Blogs />
    </main>
  );
}
