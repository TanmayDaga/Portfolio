import { createSignal, createEffect, JSX } from "solid-js";
import clsx from "clsx";
import { Motion } from "solid-motionone";




interface TypingTextProps {
  text: string;
  className?: string;
  style?: JSX.CSSProperties;
  intervalBetweenCharacters?: number;
  cursorColor?:string; 
  borderWidth?:0|2|4|8
  stopMoves?:number
}

export default function AnimatedText({
  text,
  className,
  style,
  intervalBetweenCharacters = 400,
  cursorColor = "green",
  borderWidth = 2,
  stopMoves = Infinity
}: TypingTextProps) {
  const [displayText, setDisplayText] = createSignal("");

  createEffect(() => {
    let i = 1;
    let stopMovesCount = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i));
      i++;
      if (i > text.length) {
        stopMovesCount++;
        if (stopMovesCount >= stopMoves) {
          clearInterval(interval);
        }
        i = 1;
      }
    }, intervalBetweenCharacters);
    return () => clearInterval(interval);
  });

  return (
    <Motion.span
    
      animate={{
        borderRightColor: [ cursorColor , "transparent"], // Ensures correct type
      }}
      transition={{ duration: intervalBetweenCharacters/1000, repeat: Infinity, easing: "ease-in" }}
      style={{ ...style }}
      class={clsx("border-0", `border-r-${borderWidth}`, className)}
    >
      {displayText()}
    </Motion.span>
  );
}