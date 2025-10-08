import { createSignal, type Component } from "solid-js";
import SplashScreen from "./components/SplashScreen";
import ScrollContainer from "./components/ScrollContainer";
import Navigation from "./components/Navigation";
import Home from "./Home";
import Projects from "./Projects";
import Experience from "./Experience";

const App: Component = () => {
  const [isLoading, setIsLoading] = createSignal(false);

  // onMount(() => setTimeout(() => setIsLoading(false), baseDelayInSeconds * 1000));

  return (
    <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 scroll-smooth">
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
      <SplashScreen isLoading={isLoading} />
      <Navigation />
      <ScrollContainer>
        <Home />
        <Experience />
        <Projects />
      </ScrollContainer>
    </div>
  );
};

export default App;
