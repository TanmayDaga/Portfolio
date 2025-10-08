import { Component, JSX } from "solid-js";
import { Card } from "@suid/material";
import { Motion } from "solid-motionone";

interface GlassCardProps {
  children: JSX.Element;
  className?: string;
  gradient?: string;
  delay?: number;
}

const GlassCard: Component<GlassCardProps> = (props) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: props.delay || 0, duration: 0.5 }}
    >
      <Card
        elevation={0}
        class={`
          !bg-white/80 dark:!bg-slate-800/80 
          backdrop-blur-sm 
          !border !border-slate-200/50 dark:!border-slate-700/50
          !rounded-2xl
          hover:!shadow-xl
          transition-all duration-300
          ${props.className || ''}
        `}
        sx={{
          background: props.gradient || undefined,
        }}
      >
        {props.children}
      </Card>
    </Motion.div>
  );
};

export default GlassCard;
