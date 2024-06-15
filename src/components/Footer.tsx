import React from "react";
import { TypographyMuted } from "./typography/TypographyMuted";
// import Logo from "../shared/Logo";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaGithub, FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-gray-900 py-8">
      {/* Divider */}
      {/* <div className="w-full flex justify-center my-8">
        <div className="border-t border-gray-200 w-11/12"></div>
      </div> */}
      <div className="w-full flex flex-col justify-center items-center my-6 text-muted">
        {/* Links */}
        <div className="flex flex-row space-x-4">
          <Link href="/#" className="text-gray-400 hover:text-gray-300">
            About
          </Link>
          <Link href="/#" className="text-gray-400 hover:text-gray-300">
            Contact
          </Link>
          <Link href="/#" className="text-gray-400 hover:text-gray-300">
            Blog
          </Link>
          <a href="#projects" className="text-gray-400 hover:text-gray-300">
            Projects
          </a>
        </div>

        {/* Social media */}
        <div className="flex flex-row space-x-4 mb-4 justify-between mt-8">
          <a
            href="https://github.com/frankdb"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-100 ease-in-out transform hover:scale-110 text-gray-200 hover:text-gray-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/frankbarros/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-100 ease-in-out transform hover:scale-110 text-gray-200 hover:text-gray-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://x.com/xpboostdev"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-100 ease-in-out transform hover:scale-110 text-gray-200 hover:text-gray-300"
          >
            <FaSquareXTwitter size={24} />
          </a>
        </div>

        {/* Logo */}
        <Link href="/">
          <img
            className="mt-2 mb-4 w-12 h-12 rounded-full transition-transform duration-100 ease-in-out transform hover:scale-110"
            src="/frank_logo.jpg"
            alt="frank"
          />
        </Link>

        {/* All rights reserved */}
        <div>
          <TypographyMuted>
            © 2024 Frank Barros. All rights reserved.
          </TypographyMuted>
        </div>
      </div>
    </div>
  );
}
