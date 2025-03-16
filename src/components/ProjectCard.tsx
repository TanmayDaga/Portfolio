import { Card, Box, IconButton } from "@suid/material";
import { Motion } from "solid-motionone";
import type { Component } from "solid-js";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faImage } from "@fortawesome/free-solid-svg-icons";
import Fa from "solid-fa";
import { createSignal } from "solid-js";

interface ProjectTimelineItem {
  date: string;
  milestone: string;
}

interface ProjectCardProps {
  title: string;
  image: string;
  githubLink?: string;
  isContainer?: boolean;
  gradient?: {
    from: string;
    to: string;
  };
  icon?: any;
  description?: string;
  timeline?: ProjectTimelineItem[];
  screenshots?: string[];
  onHover?: (project: ProjectCardProps) => void;
  onLeave?: () => void;
}

const ProjectCard: Component<ProjectCardProps> = (props) => {
  const [isHovered, setIsHovered] = createSignal(false);

  const gradientStyle = props.isContainer && props.gradient 
    ? `bg-gradient-to-br from-[${props.gradient.from}] to-[${props.gradient.to}]` 
    : '';

  const shadowStyle = props.isContainer && props.gradient
    ? `shadow-lg shadow-[${props.gradient.from}]/20`
    : '';

  return (
    <Motion.div
      initial={props.isContainer ? {} : { scale: 0.95 }}
      hover={props.isContainer ? {} : { y: -70, scale: 1 }}
      transition={{ duration: 0.2 }}
      class="relative"
      onMouseEnter={() => props.onHover?.(props)}
    
    >
      <Card 
        elevation={2}
        class={`w-[370px] h-44 overflow-hidden rounded-xl ${!props.isContainer && 'group cursor-pointer'}`}
        sx={{
          background: props.isContainer && props.gradient 
            ? `linear-gradient(to bottom right, ${props.gradient.from}, ${props.gradient.to})`
            : 'none',
          boxShadow: props.isContainer && props.gradient
            ? `0 10px 15px -3px ${props.gradient.from}20`
            : undefined
        }}
        onClick={props.githubLink ? () => window.open(props.githubLink, '_blank') : undefined}
      >
        <Box class="relative w-full h-full">
          {!props.isContainer && props.image && (
            <>
              <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />
              <img
                src={props.image}
                alt={props.title}
                class="h-full w-full object-cover"
              />
            </>
          )}
          <Box 
            class={`absolute ${
              props.isContainer 
                ? 'inset-0 flex items-center justify-center' 
                : 'left-0 top-3/5 -translate-y-1/2 p-6'
            } z-20`}
            sx={{
              background: props.isContainer && props.gradient
                ? `radial-gradient(circle at center, ${props.gradient.from}80, transparent 100%)`
                : 'none'
            }}
          >
            <div class={`flex items-center gap-3 ${props.isContainer ? 'text-white text-3xl font-bold' : 'text-white text-2xl font-medium'}`}>
              {props.title}
              {props.isContainer && props.icon && (
                <Box class="text-white/90">
                  <Fa icon={props.icon} />
                </Box>
              )}
              {!props.isContainer && props.githubLink && (
                <IconButton 
                  size="small" 
                  class="!text-white/90 hover:!text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(props.githubLink, '_blank');
                  }}
                >
                  <Fa icon={faGithub} />
                </IconButton>
              )}
            </div>
          </Box>
        </Box>
      </Card>

      {/* Project Details Sidebar */}
      {!props.isContainer && isHovered() && props.description && (
        <Motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          class="absolute left-[420px] top-0 w-[300px] bg-white dark:bg-slate-800 rounded-xl p-6 shadow-xl"
          style={{
            "z-index": "100"
          }}
        >
          <div class="space-y-4">
            <h4 class="text-xl font-bold text-slate-800 dark:text-slate-200">{props.title}</h4>
            <p class="text-slate-600 dark:text-slate-400 text-sm">{props.description}</p>

            {/* Timeline Section */}
            {props.timeline && props.timeline.length > 0 && (
              <div class="mt-4">
                <h5 class="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2 mb-2">
                  <Fa icon={faCalendar} /> Timeline
                </h5>
                <div class="space-y-2">
                  {props.timeline.map((item) => (
                    <div class="flex gap-2 text-xs">
                      <span class="text-teal-600 dark:text-teal-400 font-medium">{item.date}</span>
                      <span class="text-slate-600 dark:text-slate-400">{item.milestone}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Screenshots Section */}
            {props.screenshots && props.screenshots.length > 0 && (
              <div class="mt-4">
                <h5 class="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2 mb-2">
                  <Fa icon={faImage} /> Screenshots
                </h5>
                <div class="grid grid-cols-2 gap-2">
                  {props.screenshots.map((screenshot) => (
                    <img src={screenshot} alt="Screenshot" class="rounded-md w-full h-20 object-cover" />
                  ))}
                </div>
              </div>
            )}
          </div>
        </Motion.div>
      )}
    </Motion.div>
  );
};

export default ProjectCard; 