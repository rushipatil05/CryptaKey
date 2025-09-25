import {
  useRive,
  useStateMachineInput,
  Layout,
  Fit,
  Alignment,
} from "@rive-app/react-canvas";
import { useEffect, useState } from "react";
import RiveButton from "./RiveButton";
import "./RiveHero.css"

export default function RiveHero( {setstartnow} ) {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const { rive, RiveComponent } = useRive({
    src: "/hero_use_case.riv",
    artboard: "Hero Demo Listeners Resize",
    stateMachines: "State Machine 1",
    autoplay: true,
    layout: new Layout({
      fit: isLargeScreen ? Fit.Contain : Fit.Cover,
      alignment: Alignment.Center,
    }),
  });

  // Handle viewport size change
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1025px)");
    const updateMatch = () => setIsLargeScreen(mediaQuery.matches);
    updateMatch();
    mediaQuery.addEventListener("change", updateMatch);
    return () => mediaQuery.removeEventListener("change", updateMatch);
  }, []);

  // Mouse-follow logic
  const numX = useStateMachineInput(rive, "State Machine 1", "numX", 50);
  const numY = useStateMachineInput(rive, "State Machine 1", "numY", 50);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!numX || !numY) return;
      const maxWidth = window.innerWidth;
      const maxHeight = window.innerHeight;
      numX.value = (e.clientX / maxWidth) * 100;
      numY.value = 100 - (e.clientY / maxHeight) * 100;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [numX, numY]);

  return (
    <div className="relative w-full h-screen bg-[#09090E] overflow-hidden fade-in">
      <RiveComponent
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-label="Interactive hero canvas animation"
      />
      <RiveButton setstartnow={setstartnow} />
    </div>
  );
}