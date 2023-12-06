"use client";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { ThemeProvider } from "@/lib/context/ThemeContext";
import React from "react";
import Announcement from "@/components/header/Announcement";

const LayoutProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemeProvider>
      <Announcement />
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default LayoutProvider;
