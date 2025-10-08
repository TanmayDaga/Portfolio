import { Component } from "solid-js";
import { Motion } from "solid-motionone";
import { Card, Typography, Chip } from "@suid/material";
import Fa from "solid-fa";
import { faBriefcase, faGraduationCap, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import type { ExperienceItem } from "../lib/experience";

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
}

const ExperienceCard: Component<ExperienceCardProps> = (props) => {

  const cardClass =  "!bg-white dark:!bg-slate-800 !border-slate-200 dark:!border-slate-700"
   
  const iconColor = "text-slate-700 dark:text-slate-300" 

  return (
    <Motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: props.index * 0.1, duration: 0.5 }}
      class="w-fit "
    >
      <Card
        elevation={0}
        class={`${cardClass} !border !rounded-2xl p-6 hover:shadow-lg transition-all duration-300 max-w-md`}
      >
        {/* Header */}
        <div class="flex items-start justify-between mb-4">
          <div class="flex items-start gap-4 flex-1">
            <div class={`${iconColor} mt-1`}>
              <Fa icon={faBriefcase} size="lg" />
            </div>
            <div class="flex-1">
              <Typography variant="h6" class="!font-bold !text-slate-800 dark:!text-slate-200 !mb-1">
                {props.experience.title}
              </Typography>
              <Typography variant="body2" class="!text-slate-700 dark:!text-slate-300 !font-medium">
                {props.experience.company}
              </Typography>
              <div class="flex items-center gap-3 mt-2 text-sm text-slate-600 dark:text-slate-400">
                <span class="flex items-center gap-1">
                  <Fa icon={faMapMarkerAlt} size="sm" />
                  {props.experience.location}
                </span>
                <span>•</span>
                <span>{props.experience.period}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <Typography variant="body2" class="!text-slate-700 dark:!text-slate-300 !mb-4">
          {props.experience.description}
        </Typography>

        {/* Achievements */}
        {props.experience.achievements && props.experience.achievements.length > 0 && (
          <div class="mb-4">
            <Typography variant="subtitle2" class="!font-semibold !text-slate-800 dark:!text-slate-200 !mb-2">
              Key Highlights
            </Typography>
            <ul class="space-y-2">
              {props.experience.achievements.map((achievement) => (
                <li class="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span class={`${iconColor} mt-1`}>•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        {props.experience.techStack && props.experience.techStack.length > 0 && (
          <div class="flex flex-wrap gap-2">
            {props.experience.techStack.map((tech) => (
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
        )}
      </Card>
    </Motion.div>
  );
};

export default ExperienceCard;
