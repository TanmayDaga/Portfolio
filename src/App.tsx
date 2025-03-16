import { createSignal, type Component } from "solid-js";
import SplashScreen from "./components/SplashScreen";
import ScrollContainer from "./components/ScrollContainer";
import Home from "./Home";
import Projects from "./Projects";

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
      <ScrollContainer>
        <Home />
        <Projects />
      </ScrollContainer>
    </div>
  );
};

export default App;
