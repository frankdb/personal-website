/* eslint-disable @next/next/no-img-element */
import React from "react";
import { LuConstruction } from "react-icons/lu";

interface ProjectCardProps {
  projectData: {
    title: string;
    description: string;
    link: string;
    image: string;
    Icon: React.ComponentType;
    underConstruction?: boolean;
  };
}

interface IconProps {
  size?: number;
  color?: string;
}

const IconWrapper: React.FC<{ Icon: React.ComponentType<IconProps> }> = ({
  Icon,
}) => (
  <div className="absolute inset-0 text-card-foreground flex items-center justify-center transition-opacity duration-300 opacity-100 group-hover:opacity-0">
    <Icon size={48} />
  </div>
);

const UnderConstructionWrapper: React.FC<{
  Icon: React.ComponentType<IconProps>;
}> = ({ Icon }) => (
  <div className="absolute inset-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <Icon size={48} />
  </div>
);

export default function ProjectCard({ projectData }: ProjectCardProps) {
  const { title, description, image, Icon, underConstruction, link } =
    projectData;
  return (
    <div className="group flex flex-col mx-auto p-4 sm:p-8 min-w-[260px] sm:min-w-[300px] max-w-[300px]">
      {!underConstruction ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="relative rounded-lg bg-muted h-44 w-60 md:h-52 md:w-64 cursor-pointer overflow-hidden mx-auto">
            <img
              src={image}
              alt="project image"
              className="absolute inset-0 w-full h-full object-cover opacity-0 
            group-hover:opacity-100 transition-opacity duration-300"
            />
            <IconWrapper Icon={Icon} />
          </div>
        </a>
      ) : (
        <div className="relative rounded-lg bg-muted h-44 w-60 md:h-52 md:w-64 cursor-normal overflow-hidden mx-auto">
          <UnderConstructionWrapper Icon={LuConstruction} />
          <IconWrapper Icon={Icon} />
        </div>
      )}
      <div className="flex flex-col mt-3 text-foreground w-60 mx-auto">
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-sm">{description}</div>
      </div>
    </div>
  );
}
