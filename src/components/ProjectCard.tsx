import { Card, Box, IconButton, Chip, Typography } from "@suid/material";
import { Motion } from "solid-motionone";
import type { Component } from "solid-js";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import Fa from "solid-fa";
import { createSignal, Show } from "solid-js";

interface TechStackItem {
  icon: any;
  name: string;
}

interface ProjectCardProps {
  title: string;
  image: string;
  githubLink?: string;
  liveLink?: string;
  description?: string;
  techStack?: TechStackItem[];
  featured?: boolean;
  screenshots?: string[];
  onSelect?: () => void;
  isSelected?: boolean;
}

const ProjectCard: Component<ProjectCardProps> = (props) => {
  const [isHovered, setIsHovered] = createSignal(false);

  const handleCardClick = () => {
    if (props.onSelect) {
      props.onSelect();
    }
  };

  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <Card
        elevation={isHovered() ? 8 : 2}
        class={`
          !bg-white dark:!bg-slate-800 overflow-hidden rounded-2xl 
          transition-all duration-300 cursor-pointer group
          ${props.featured ? 'ring-2 ring-teal-500/50' : ''}
          ${props.isSelected ? 'ring-2 ring-blue-500' : ''}
        `}
      >
        {/* Image Section */}
        <div class="relative overflow-hidden h-56">
          <img
            src={props.image}
            alt={props.title}
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

          {/* Action Buttons */}
          <div class="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Show when={props.githubLink}>
              <IconButton
                size="small"
                class="!bg-white/90 hover:!bg-white !text-slate-800"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(props.githubLink, '_blank');
                }}
              >
                <Fa icon={faGithub} size="sm" />
              </IconButton>
            </Show>
            <Show when={props.liveLink}>
              <IconButton
                size="small"
                class="!bg-white/90 hover:!bg-white !text-slate-800"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(props.liveLink, '_blank');
                }}
              >
                <Fa icon={faExternalLinkAlt} size="sm" />
              </IconButton>
            </Show>
          </div>

          {/* Featured Badge */}
          <Show when={props.featured}>
            <div class="absolute top-4 left-4">
              <Chip
                label="Featured"
                size="small"
                class="!bg-teal-500 !text-white !font-semibold"
              />
            </div>
          </Show>
        </div>

        {/* Content Section */}
        <div class="p-6">
          <Typography variant="h6" class="!font-bold !text-slate-800 dark:!text-slate-200 !mb-2">
            {props.title}
          </Typography>

          <Typography variant="body2" class="!text-slate-600 dark:!text-slate-400 !mb-4 ">
            {props.description}
          </Typography>

          {/* Tech Stack */}
          <Show when={props.techStack && props.techStack.length > 0}>
            <div class="flex flex-wrap gap-2">
              {props.techStack?.map((tech) => (
                <Chip
                  label={
                    <span class="flex items-center gap-1.5">
                      <Fa icon={tech.icon} size="sm" />
                      {tech.name}
                    </span>
                  }
                  size="small"
                  class="!bg-slate-100 dark:!bg-slate-700 !text-slate-700 dark:!text-slate-300"
                />
              ))}
            </div>
          </Show>
        </div>
      </Card>
    </Motion.div>
  );
};

export default ProjectCard; 