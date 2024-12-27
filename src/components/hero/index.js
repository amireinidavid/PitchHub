"use client";

import React from "react";
import { Download } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import "../../Css/hero.css";

const Hero = () => {
  return (
    <section className="w-full h-full min-h-screen bg-gradient-to-l bg-gray-950 text-white flex flex-col justify-center items-center relative z-10 pb-10">
      {/* stars */}
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="max-w-7xl mt-24 mx-auto items-center flex flex-col md:flex-row gap-16 md:gap-40 justify-between">
        <div className="md:space-y-6 px-4">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:text-6xl text-4xl font-bold mb-4"
          >
            Welcome to <p className="text-blue-400">Pitch Hub</p>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.5 }}
            className="lg:w-[600px] mb-4 md:mb-0 text-sm text-gray-300"
          >
            Pitch Hub is an online platform for pitching ideas and investing in
            them to grow a business together with a team of experts and
            investors around the world to help you achieve your dreams and goals
            in life.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.5 }}
            className="px-8 py-2 flex items-center gap-2 bg-blue-500 rounded-full text-white hover:bg-blue-600 shadow-blue-500 border-2 border-blue-400 transition-all shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC] "
          >
            Get Started
          </motion.button>
          <div className="flex gap-3 text-2xl transition-all mt-5 md:mt-0">
            <FaFacebook className="hover:text-blue-400" />
            <FaInstagram className="hover:text-blue-400" />
            <FaLinkedin className="hover:text-blue-400" />
            <FaSquareXTwitter className="hover:text-blue-400" />
          </div>
        </div>
        <div className="relative group">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0 }}
            src="https://www.shutterstock.com/shutterstock/photos/2379829159/display_1500/stock-photo-corporate-event-caucasian-female-tech-ceo-giving-presentation-to-colleagues-or-investors-in-2379829159.jpg"
            alt=""
            className="rounded-full border border-blue-600 h-[500px] md:w-[500px] w-[500px]  shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
