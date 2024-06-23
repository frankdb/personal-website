import React from "react";
import ProjectCard from "./ProjectCard";
import { FaChartLine, FaLaptop, FaRegPaperPlane } from "react-icons/fa6";

const projectData = [
  {
    title: "Hirepod",
    description:
      "Hirepod is a job board for remote workers, built with Next.js, Tailwind CSS, and Prisma.",
    image: "/hirepod.png",
    link: "https://hirepod.io",
    Icon: FaLaptop,
  },
  {
    title: "Travel Itinerary Generator",
    description:
      "A collaborative text editor for generating travel itineraries, built with React, Vite, Node and MongoDB.",
    image: "/frank_logo.jpg",
    link: "/#",
    Icon: FaRegPaperPlane,
    underConstruction: true,
  },
  {
    title: "Real Time Analytics Dashboard",
    description:
      "A real time analytics dashboard for monitoring website traffic, built with React, Spring Boot and Postgres",
    image: "/frank_logo.jpg",
    link: "/#",
    Icon: FaChartLine,
    underConstruction: true,
  },
];

export default function Portfolio() {
  return (
    <section id="projects">
      <div className="w-full mx-auto bg-background-secondary py-16">
        <div className="flex flex-col justify-center items-center max-w-5xl mx-auto">
          <div className="text-center mb-2 text-foreground">
            <div className="scroll-m-20 pb-2 text-4xl font-semibold tracking-tight first:mt-0">
              Projects 🎨
            </div>
            <div className="mx-auto w-3/4 text-sm sm:text-base leading-snug sm:leading-normal max-w-2xl lg:max-w-3xl">
              Being able to build cool things is why I got into coding in the
              first place. There is nothing more fun than seeing your creations
              come to life. Note: some of these are still in progress.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 sm:gap-4 sm:my-4">
            {projectData.map((data) => (
              <ProjectCard key={data.title} projectData={data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
