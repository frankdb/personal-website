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
  },
  {
    title: "Real Time Analytics Dashboard",
    description:
      "A real time analytics dashboard for monitoring website traffic, built with React, Spring Boot and Postgres",
    image: "/frank_logo.jpg",
    link: "/#",
    Icon: FaChartLine,
  },
];

export default function Portfolio() {
  return (
    <section id="projects">
      <div className="w-full mx-auto bg-gray-700 py-16">
        <div className="flex flex-col justify-center items-center max-w-5xl mx-auto">
          <div className="text-center mb-2 text-gray-200">
            <div className="scroll-m-20 pb-2 text-4xl font-semibold tracking-tight first:mt-0">
              Projects 🎨
            </div>
            <div className="max-w-2xl lg:max-w-3xl">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
            {projectData.map((data) => (
              <ProjectCard key={data.title} projectData={data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
