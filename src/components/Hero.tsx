"use client";

/* eslint-disable @next/next/no-img-element */
import { FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full bg-background">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-start lg:flex-row items-center gap-2 sm:gap-16 lg:gap-20 py-4 px-8 md:py-16 lg:py-20">
        <div className="flex flex-col items-start justify-center text-left text-foreground h-72">
          <h1 className="font-extrabold text-4xl sm:text-5xl tracking-tight">
            Hi, I&apos;m Frank{" "}
            <span className="text-4xl sm:text-5xl align-top">
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, 15, -15, 15, -15, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                style={{ display: "inline-block" }}
              >
                👋🏽
              </motion.span>
            </span>
          </h1>
          <p className="text-base sm:text-lg opacity-80 leading-snug md:leading-normal mt-8 w-3/4 md:w-96">
            I&apos;m a full stack software engineer specializing in TypeScript,
            React and Node.
          </p>
          <div className="flex flex-row space-x-4 mb-4 justify-between mt-8">
            <a
              href="https://github.com/frankdb"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-100 ease-in-out transform hover:scale-110 text-foreground hover:text-foreground"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/frankbarros/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-100 ease-in-out transform hover:scale-110 text-foreground hover:text-foreground"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://x.com/xpboostdev"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-100 ease-in-out transform hover:scale-110 text-foreground hover:text-foreground"
            >
              <FaSquareXTwitter size={24} />
            </a>
          </div>
          {/* <Link href="/auth/login">
            <Button className="bg-primary font-bold text-white hover:bg-green-500 hover:opacity-75">
              Get Started
            </Button>
          </Link> */}
        </div>
        <div className="lg:w-full flex items-center justify-center">
          <img
            src="/pilot.png"
            alt="Filipino office worker"
            // width={400}
            // height={400}
            className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
