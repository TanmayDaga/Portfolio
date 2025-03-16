import { Motion } from "solid-motionone";
import type { Component } from "solid-js";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: Component<TimelineProps> = (props) => {
  return (
    <div class="relative">
      {props.events.map((event, index) => (
        <Motion.div
          initial={{ opacity: 0, x: -20 }}
          inView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div class="mb-8 flex gap-4">
            <div class="flex flex-col items-center">
              <div class="w-3 h-3 bg-teal-500 rounded-full" />
              {index < props.events.length - 1 && (
                <div class="w-0.5 h-full bg-teal-500/20" />
              )}
            </div>
            <div>
              <span class="text-sm text-teal-600 dark:text-teal-400 font-medium">
                {event.date}
              </span>
              <h3 class="text-lg text-slate-700 dark:text-slate-200 font-medium mt-1">
                {event.title}
              </h3>
              <p class="text-slate-600 dark:text-slate-300 text-sm mt-1">
                {event.description}
              </p>
            </div>
          </div>
        </Motion.div>
      ))}
    </div>
  );
};

export default Timeline; 