import { Component, For } from "solid-js";
import { Motion } from "solid-motionone";
import { Container, Typography, Grid } from "@suid/material";
import ExperienceCard from "./components/ExperienceCard";
import { experiences } from "./lib/experience";

const Experience: Component = () => {
  return (
    <div class="min-h-screen snap-start scroll-snap-align-start bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800" id="experience">
      <Container maxWidth="lg" class="pb-16 pt-4 px-4">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          class="mb-12"
        >
          <Typography variant="h3" class="!font-bold !text-slate-800 dark:!text-slate-200 !mb-2">
            Experience
          </Typography>
          <Typography variant="body1" class="!text-slate-600 dark:!text-slate-400">
            My professional journey and academic background
          </Typography>
        </Motion.div>
        <div class="flex flex-wrap gap-6 justify-center">
          <For each={experiences}>
            {(experience, index) => (
              <div class="w-full sm:w-[48%] lg:w-[31%]">
                <ExperienceCard experience={experience} index={index()} />
              </div>
            )}
          </For>
        </div>
      </Container>
    </div>
  );
};

export default Experience;
