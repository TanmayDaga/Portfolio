import { Component, createSignal, For, Show } from "solid-js";
import { Motion } from "solid-motionone";
import { Card, Typography, IconButton } from "@suid/material";
import Fa from "solid-fa";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import type { Project } from "../lib/projects";

interface ProjectScreenshotsProps {
  project: Project;
  onClose: () => void;
}

const ProjectScreenshots: Component<ProjectScreenshotsProps> = (props) => {
  const [currentImageIndex, setCurrentImageIndex] = createSignal(0);

  const screenshots = () => props.project.screenshots || [props.project.image];

  return (
    <>
      {/* Backdrop */}
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.0 }}
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={props.onClose}
      />

      {/* Floating Panel */}
      <Motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-md"
      >
        <Card elevation={8} class="!bg-white dark:!bg-slate-800 !rounded-xl overflow-hidden !shadow-2xl">
          {/* Compact Header */}
          <div class="p-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
            <Typography variant="subtitle1" class="!font-semibold !text-slate-800 dark:!text-slate-200">
              Preview
            </Typography>
            <IconButton
              onClick={props.onClose}
              size="small"
              class="!text-slate-600 dark:!text-slate-400"
            >
              <Fa icon={faClose} size="sm" />
            </IconButton>
          </div>

          {/* Compact Screenshot Grid */}
          <div class="p-4">
            <div class="grid grid-cols-2 gap-2">
              <For each={screenshots().slice(0, 4)}>
                {(screenshot, index) => (
                  <div class="relative rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-900 aspect-video">
                    <img
                      src={screenshot}
                      alt={`${props.project.title} preview ${index() + 1}`}
                      class="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                      onClick={() => window.open(screenshot, '_blank')}
                    />
                  </div>
                )}
              </For>
            </div>

            <Show when={screenshots().length > 4}>
              <Typography variant="caption" class="!text-slate-500 dark:!text-slate-400 !mt-2 !block !text-center">
                +{screenshots().length - 4} more
              </Typography>
            </Show>
          </div>
        </Card>
      </Motion.div>
    </>
  );
};

export default ProjectScreenshots;
