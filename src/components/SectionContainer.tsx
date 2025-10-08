import { Component, JSX } from "solid-js";
import { Motion } from "solid-motionone";
import { Container, Typography } from "@suid/material";

interface SectionContainerProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: JSX.Element;
  className?: string;
}

const SectionContainer: Component<SectionContainerProps> = (props) => {
  return (
    <div
      id={props.id}
      class={`min-h-screen snap-start scroll-snap-align-start bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 ${props.className || ''}`}
    >
      <Container maxWidth="lg" class="py-16 px-4">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          class="mb-12"
        >
          <Typography variant="h3" class="!font-bold !text-slate-800 dark:!text-slate-200 !mb-2">
            {props.title}
          </Typography>
          {props.subtitle && (
            <Typography variant="body1" class="!text-slate-600 dark:!text-slate-400">
              {props.subtitle}
            </Typography>
          )}
        </Motion.div>

        {props.children}
      </Container>
    </div>
  );
};

export default SectionContainer;
