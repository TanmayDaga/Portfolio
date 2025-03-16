import { Motion } from "solid-motionone";
import type { Component } from "solid-js";
import ProjectCard from "./components/ProjectCard";
import Timeline from "./components/Timeline";

import { createSignal, createEffect } from "solid-js";
import Fa from "solid-fa";
import { Grid, Container, Typography, IconButton, Paper, Divider } from "@suid/material";
import ProjectSidebar from "./components/ProjectSidebar";

import { projectCategories } from "./lib/projects";


const Projects: Component = () => {
  const sortedCategories = [...projectCategories].sort((a, b) => a.order - b.order);
  const [hoveredProject, setHoveredProject] = createSignal<any>(null);
  const [isMobile, setIsMobile] = createSignal(false);

  // Handle responsive behavior
  createEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 600); // Match SUID's sm breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  });

  const renderSidebarSection = (title: string, icon: any, content: any) => {
    if (!content) return null;
    
    return (
      <>
        <Divider class="!border-slate-200/10" />
        <div class="pt-5">
          <Typography variant="subtitle2" class="flex items-center gap-2 text-slate-200 mb-3">
            <Fa icon={icon} /> {title}
          </Typography>
          {content}
        </div>
      </>
    );
  };

  return (
    <div class="min-h-screen snap-start scroll-snap-align-start bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800" id="projects">
      <Container 
        maxWidth={false} 
        class={`
          py-12 relative 
          ${isMobile() ? 'pb-[70vh]' : ''}
        `}
      >
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          class="mb-12"
        >
          <Typography variant="h4" class="!font-bold text-slate-800 dark:text-slate-200 px-4">
            Projects
          </Typography>
        </Motion.div>

        <Grid container spacing={4} class="px-4">
          <Grid item xs={12} lg={hoveredProject() && !isMobile() ? 9 : 12}>
            <Grid container spacing={4}>
              {sortedCategories.map(category => (
                <Grid item xs={12} sm={6} md={6} lg={6} xl={4}>
                  <Paper 
                    elevation={0} 
                    class={`
                      relative min-h-[350px] w-full !bg-transparent
                      ${hoveredProject() && !hoveredProject().isContainer && isMobile() ? 'opacity-20' : 'opacity-100'}
                      transition-opacity duration-300
                    `}
                  >
                    {category.projects.map((project, index) => (
                      <div 
                        class="absolute left-0 bottom-0" 
                        style={{
                          "transform": `translateY(-${index * 40}px)`,
                          "z-index": category.projects.length - index
                        }}
                      >
                        <ProjectCard 
                          {...project} 
                          gradient={category.gradient}
                          onHover={setHoveredProject}
                          onLeave={() => setHoveredProject(null)}
                        />
                      </div>
                    ))}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* Project Details Sidebar */}
        <ProjectSidebar 
          project={hoveredProject()} 
          isMobile={isMobile()} 
        />
      </Container>
    </div>
  );
};

export default Projects; 