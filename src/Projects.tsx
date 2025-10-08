import { Motion } from "solid-motionone";
import type { Component } from "solid-js";
import ProjectCard from "./components/ProjectCard";
import { For, createSignal, Show } from "solid-js";
import { Grid, Container, Typography, Button } from "@suid/material";
import { projects, type Project } from "./lib/projects";
import ProjectScreenshots from "./components/ProjectScreenshots";

const Projects: Component = () => {
  const [activeCategory, setActiveCategory] = createSignal("All");
  const [selectedProject, setSelectedProject] = createSignal<Project | null>(null);

  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = () => {
    if (activeCategory() === "All") return projects;
    return projects.filter(p => p.category === activeCategory());
  };

  return (
    <div class="min-h-screen snap-start scroll-snap-align-start bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800" id="projects">
      <Container maxWidth="xl" class="pb-16 pt-4 px-4">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          class="mb-12"
        >
          <Typography variant="h3" class="!font-bold !text-slate-800 dark:!text-slate-200 !mb-2">
            Projects
          </Typography>
          <Typography variant="body1" class="!text-slate-600 dark:!text-slate-400 !mb-6">
            A showcase of my recent work and contributions
          </Typography>

          {/* Category Filter */}
          <div class="flex flex-wrap gap-2">
            <For each={categories}>
              {(category) => (
                <Button
                  variant={activeCategory() === category ? "contained" : "outlined"}
                  onClick={() => setActiveCategory(category)}
                  class={
                    activeCategory() === category
                      ? "!bg-teal-600 hover:!bg-teal-700 !text-white !normal-case !rounded-full"
                      : "!border-slate-300 dark:!border-slate-600 !text-slate-700 dark:!text-slate-300 !normal-case !rounded-full hover:!border-teal-600 hover:!text-teal-600"
                  }
                >
                  {category}
                </Button>
              )}
            </For>
          </div>
        </Motion.div>

        <Grid container spacing={4}>
          <For each={filteredProjects()}>
            {(project) => (
              <Grid item xs={12} sm={6} md={4}>
                <ProjectCard
                  {...project}
                  onSelect={() => setSelectedProject(project)}
                  isSelected={selectedProject()?.title === project.title}
                />
              </Grid>
            )}
          </For>
        </Grid>

        {/* Floating Screenshots Panel */}
        <Show when={selectedProject()}>
          <ProjectScreenshots
            project={selectedProject()!}
            onClose={() => setSelectedProject(null)}
          />
        </Show>
      </Container>
    </div>
  );
};

export default Projects; 