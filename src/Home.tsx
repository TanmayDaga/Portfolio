import { Motion } from "solid-motionone";
import AnimatedText from "./shared/AnimatedTextTypeWriter";
import { Button } from "@suid/material";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Fa from "solid-fa";
import Image from "./assets/profile.png";

const TECH_STACK = ["React", "Node.js", "TypeScript", "Next.js"];
const baseDelayInSeconds = 1;
export default function Home() {
  const scrollToProjects = (e: MouseEvent) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      class="min-h-screen snap-start scroll-snap-align-start"
    >
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[calc(100vh-6rem)]">
        {/* Left Content Section */}
        <div class="lg:col-span-7 space-y-8">
          <AnimatedText
            text="Tanmay Daga"
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-emerald-600"
            cursorColor="red"
            stopMoves={1}
          />

          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: baseDelayInSeconds - .5, duration: 0.8 }}
            class="text-lg md:text-xl text-slate-700 dark:text-slate-300 font-serif leading-relaxed mt-4"
          >
            I am a passionate Full Stack Developer who loves crafting seamless
            digital experiences and bringing ideas to life. Always pushing
            boundaries, solving challenges, and building innovative solutions
            that make an impact. 🚀
          </Motion.p>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: baseDelayInSeconds, duration: 0.8 }}
          >
            <div class="flex gap-4">
              <Button 
                variant="contained"
                class="!bg-teal-600 hover:!bg-teal-700 normal-case !rounded-md"
                onClick={scrollToProjects}
              >
                View Projects
              </Button>
              <Button 
                variant="outlined"
                class="!border-teal-600 !text-teal-600 hover:!bg-teal-50 dark:hover:!bg-teal-900/30 normal-case !rounded-md"
              >
                Contact Me
              </Button>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            <div class="flex gap-4">
              {[
                { icon: faGithub, href: 'https://github.com/TanmayDaga' },
                { icon: faLinkedin, href: 'https://www.linkedin.com/in/01tanmaydaga/' },
                { icon: faEnvelope, href: 'mailto:tanmay06daga@gmail.com' }
              ].map(({ icon, href }) => (
                <a
                  href={href}
                  class="text-slate-600 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-500 transition-colors"
                >
                  <Fa icon={icon} size="lg" />
                </a>
              ))}
            </div>
          </Motion.div>
        </div>

        {/* Right Avatar Section */}
        <div class="lg:col-span-5 order-first lg:order-last">
          <Motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: baseDelayInSeconds, duration: 0.8 }}
          >
            <div class="relative max-w-md mx-auto">
              <div class="absolute inset-0 -m-4 bg-gradient-to-br from-teal-400/20 to-emerald-500/20 rounded-full blur-3xl" />
              <img
                src={Image}
                alt="Tanmay Daga"
                class="relative w-full aspect-square rounded-full object-cover border-2 border-teal-500/20 shadow-xl"
              />
            </div>

            
          </Motion.div>
        </div>
      </div>
    </div>
  </Motion.div>
  );
};