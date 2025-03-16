import Fa from "solid-fa";
import type { Component } from "solid-js";

interface TechIconProps {
  icon: any;
  isSvg?: boolean;
}

const TechIcon: Component<TechIconProps> = (props) => {
  return props.isSvg ? (
    <img 
      src={props.icon} 
      alt="tech icon" 
      class="w-5 h-5 brightness-0 invert" 
    />
  ) : (
    <Fa icon={props.icon} />
  );
};

export default TechIcon; 