import type { ParentComponent } from "solid-js";

const ScrollContainer: ParentComponent = (props) => {
  return (
    <div class="h-screen snap-y snap-mandatory overflow-y-scroll">
      {props.children}
    </div>
  );
};

export default ScrollContainer; 