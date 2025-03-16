import { Motion } from "solid-motionone";
import { Typography, Paper, Divider } from "@suid/material";
import { Component, Show } from "solid-js";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faImage, faCode, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Fa from "solid-fa";
import TechIcon from "./TechIcon";

interface TechStackItem {
  icon: any;
  name: string;
  isSvg?: boolean;
}

interface ProjectTimelineItem {
  date: string;
  milestone: string;
}

interface ProjectDetails {
  title: string;
  description?: string;
  githubLink?: string;
  websiteUrl?: string;
  timeline?: ProjectTimelineItem[];
  screenshots?: string[];
  isContainer?: boolean;
  techStack?: TechStackItem[];
}

interface ProjectSidebarProps {
  project: ProjectDetails | null;
  isMobile: boolean;
}

const ProjectSidebar: Component<ProjectSidebarProps> = (props) => {
  const renderSidebarSection = (title: string, icon: any, content: any) => {
    if (!content) return null;
    
    return (
      <>
        <Divider class="!border-slate-200/10" />
        <div class="pt-5 space-y-8">
          <Typography variant="subtitle2" class="flex items-center gap-2 text-slate-200 mb-3">
            <Fa icon={icon} /> {title}
          </Typography>
          {content}
        </div>
      </>
    );
  };

  return (
    <Paper 
      elevation={0}
      class={`
        ${props.isMobile 
          ? 'fixed bottom-0 left-0 right-0 max-h-[70vh] rounded-t-xl z-50' 
          : 'absolute top-0 right-0 w-[320px] h-screen'
        }
        !bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50 overflow-y-auto
        transition-all duration-300 ease-in-out
        ${!props.project || props.project.isContainer 
          ? props.isMobile ? 'translate-y-full' : 'translate-x-full'
          : 'translate-y-0 translate-x-0'
        }
      `}
    >
      <div class={`p-6 ${props.isMobile ? 'pb-safe' : ''}`}>
        <Show
          when={props.project && !props.project.isContainer}
          fallback={
            <div class="h-[calc(100vh-3rem)] flex items-center justify-center">
              <Typography variant="caption" class="!text-slate-500">
                Hover over a project to see details
              </Typography>
            </div>
          }
        >
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            class="space-y-5"
          >
            <div>
              <Typography variant="h6" class="!font-bold text-slate-100">
                {props.project?.title}
              </Typography>
              <div class="flex items-center gap-4 mt-1">
                {props.project?.githubLink && (
                  <a 
                    href={props.project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    <Fa icon={faGithub} size="sm" />
                    <Typography variant="caption" class="!text-current">GitHub</Typography>
                  </a>
                )}
                {props.project?.websiteUrl && (
                  <a 
                    href={props.project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    <Fa icon={faGlobe} size="sm" />
                    <Typography variant="caption" class="!text-current">Visit Site</Typography>
                  </a>
                )}
              </div>
            </div>

            {props.project?.description && (
              <Typography variant="body2" class="!text-slate-300">
                {props.project.description}
              </Typography>
            )}

            {/* Tech Stack Section */}
            {renderSidebarSection(
              "Tech Stack",
              faCode,
              props.project?.techStack?.length && (
                <div class="flex flex-wrap gap-3">
                  {props.project.techStack.map((tech) => (
                    <div class="group relative">
                      <div class="w-8 h-8 rounded-lg bg-slate-700/50 flex items-center justify-center text-slate-300 hover:text-teal-400 hover:bg-slate-700 transition-colors cursor-pointer">
                        <TechIcon icon={tech.icon} isSvg={tech.isSvg} />
                      </div>
                      <div class="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 text-xs text-slate-200 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {tech.name}
                      </div>
                    </div>
                  ))}
                </div>
              )
            )}

            {/* Timeline Section */}
            {renderSidebarSection(
              "Development Timeline",
              faCalendar,
              props.project?.timeline?.length && (
                <div class="space-y-2.5">
                  {props.project.timeline.map((item: ProjectTimelineItem) => (
                    <div class="flex gap-3">
                      <Typography variant="caption" class="w-16 shrink-0 !text-teal-400 !font-medium">
                        {item.date}
                      </Typography>
                      <Typography variant="caption" class="!text-slate-300">
                        {item.milestone}
                      </Typography>
                    </div>
                  ))}
                </div>
              )
            )}

            {/* Screenshots Section */}
            {renderSidebarSection(
              "Screenshots",
              faImage,
              props.project?.screenshots?.length && (
                <div class="grid grid-cols-2 gap-2">
                  {props.project.screenshots.map((screenshot: string) => (
                    <Paper 
                      elevation={0} 
                      class="rounded-md overflow-hidden ring-1 ring-slate-700/50"
                    >
                      <img 
                        src={screenshot} 
                        alt="Screenshot" 
                        class="w-full aspect-video object-cover" 
                      />
                    </Paper>
                  ))}
                </div>
              )
            )}
          </Motion.div>
        </Show>
      </div>
    </Paper>
  );
};

export default ProjectSidebar; 