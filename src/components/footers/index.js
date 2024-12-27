"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 dark:bg-gray-800 dark:text-white py-24 px-8">
      <motion.div
        className="container mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
          <motion.div
            className="lg:w-1/2 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-lg font-bold mb-4">Useful Links</h4>
            <div className="flex flex-wrap">
              <ul className="w-1/2 space-y-2">
                <li>
                  <a href="#" className="hover:text-yellow-500">
                    Pitching
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500">
                    Feeds
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500">
                    Investors
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500">
                    Our partners
                  </a>
                </li>
              </ul>
              <ul className="w-1/2 space-y-2">
                <li>
                  <a href="#" className="hover:text-yellow-500">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500">
                    Terms of service
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex  items-center mb-2">
              <Image
                src={"/assets/logo.png"}
                alt="logo"
                width={72}
                height={72}
                className="rounded-full mr-2"
              />
              <h1 className=" font-bold text-3xl" href={"/"}>
                Pitch Hub
              </h1>
            </div>

            <p className="mb-4">
              Pitch Hub is a business pitching website where we help potential
              business owners meet with an ivestors that will invest positively
              into there lives.
            </p>
            <div className="flex justify-center lg:justify-start gap-4 mb-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="h-6 w-6" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutubeSquare className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitterSquare className="w-6 h-6" />
              </a>
            </div>
            <p>© Copyright PitchHub 2024.</p>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
