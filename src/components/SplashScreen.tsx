
import { Accessor, Component, JSX, Show, Signal } from "solid-js";
import { Motion, Presence } from "solid-motionone";
import RotatingLoader from "../shared/Loader";
import AnimatedText from "../shared/AnimatedTextTypeWriter";

interface SplashScreenProps {
  isLoading: Accessor<boolean>;
}

const SplashScreen: Component<SplashScreenProps> = ({ isLoading }) => {
  return (
    <>
      <Presence exitBeforeEnter>
        <Show when={isLoading()}>
          <Motion.div
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 2 } }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              display: "flex",
              "justify-content": "center",
              "align-items": "center",
              "background-color": "#000000",
              "z-index": 9999,
            }}
          >
            <div>
              <RotatingLoader />
              <br />
              <AnimatedText
                text="Loading..."
                style={{ color: "white" }}
                intervalBetweenCharacters={300}
              />
            </div>
          </Motion.div>
        </Show>
      </Presence>
    </>
  );
};

export default SplashScreen;
