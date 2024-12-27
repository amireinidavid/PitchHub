"use client";
import React, { useEffect, useState } from "react";
import Header from "../header";

const StickyHeader = ({ profileInfo, user }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 p-4 transition-all ${
        isScrolled ? "dark:bg-[#030712] bg-white " : "shadow-lg"
      } bg-opacity-70`}
    >
      <Header profileInfo={profileInfo} user={user} />
    </header>
  );
};

export default StickyHeader;
