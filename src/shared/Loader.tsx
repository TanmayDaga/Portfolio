import { Motion } from "solid-motionone";

export default function RotatingLoader() {
  return (
    <Motion.div
      class="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, easing: "linear" }}
    />
  );
}
