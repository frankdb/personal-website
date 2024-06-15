import React from "react";
import Link from "next/link";

interface ProjectCardProps {
  projectData: {
    title: string;
    description: string;
    link: string;
    image: string;
    Icon: React.ComponentType;
  };
}

interface IconProps {
  size?: number;
  color?: string;
}

const IconWrapper: React.FC<{ Icon: React.ComponentType<IconProps> }> = ({
  Icon,
}) => (
  <div className="absolute inset-0 bg-gray-600 flex items-center justify-center transition-opacity duration-300 opacity-100 group-hover:opacity-0">
    <Icon size={48} />
  </div>
);

export default function ProjectCard({ projectData }: ProjectCardProps) {
  const { title, description, image, Icon } = projectData;
  return (
    <div className="group flex flex-col p-8 min-w-[260px] sm:min-w-[300px] max-w-[300px]">
      <div className="relative rounded-lg bg-gray-700 h-56 w-72 cursor-pointer overflow-hidden">
        <img
          src={image}
          alt="project image"
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        <IconWrapper Icon={Icon} />
      </div>
      <div className="flex flex-col mt-3 text-gray-300">
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-sm">{description}</div>
      </div>
    </div>
  );
}