import { Component, createSignal, onMount } from "solid-js";
import { Motion } from "solid-motionone";
import { IconButton } from "@suid/material";
import Fa from "solid-fa";
import { faHome, faBriefcase, faCode } from "@fortawesome/free-solid-svg-icons";

const Navigation: Component = () => {
  const [activeSection, setActiveSection] = createSignal("home");

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });

    setActiveSection(sectionId);
  };

  const navItems = [
    { id: "home", icon: faHome, label: "Home" },
    { id: "experience", icon: faBriefcase, label: "Experience" },
    { id: "projects", icon: faCode, label: "Projects" },
  ];

  return (
    <Motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      class="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
    >
      <div class="flex flex-col gap-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-full p-3 shadow-lg border border-slate-200/50 dark:border-slate-700/50">
        {navItems.map((item) => (
          <IconButton
            onClick={() => scrollToSection(item.id)}
            class={`
              transition-all duration-300
              ${activeSection() === item.id
                ? "!bg-teal-600 !text-white"
                : "!text-slate-600 dark:!text-slate-400 hover:!bg-slate-100 dark:hover:!bg-slate-700"
              }
            `}
            title={item.label}
          >
            <Fa icon={item.icon} />
          </IconButton>
        ))}
      </div>
    </Motion.div>
  );
};

export default Navigation;
