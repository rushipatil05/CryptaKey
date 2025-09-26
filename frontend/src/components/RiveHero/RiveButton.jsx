import { useCallback } from "react";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";

export default function RiveButton({ setstartnow }) {
  const { rive, RiveComponent } = useRive({
    src: "/hero_use_case.riv",
    artboard: "Button",
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  const isHover = useStateMachineInput(rive, "State Machine 1", "isHover");

  const toggleHover = (hovering) => {
    if (isHover) isHover.value = hovering;
  };

  return (
    <div className="absolute top-1/2 left-1/2 text-center -translate-x-1/2 -translate-y-1/2">
      {/* Heading adjusts for phone, tab, laptop */}
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-6">
        Welcome to CryptaKey
      </h1>

      {/* Button container with responsive sizing */}
      <div className="relative w-40 h-12 sm:w-44 sm:h-14 md:w-48 md:h-16 lg:w-56 lg:h-18 mx-auto">
        <RiveComponent
          className="absolute inset-0 w-full h-full pointer-events-none"
          aria-hidden="true"
        />
        <button
          onClick={() => setstartnow(false)}
          className="
        absolute inset-0 flex items-center justify-center w-full h-full 
        text-white text-xs sm:text-sm md:text-base lg:text-lg
        cursor-pointer rounded-lg
        focus:outline-none focus:ring-0 active:outline-none active:ring-0
      "
          onMouseEnter={() => toggleHover(true)}
          onMouseLeave={() => toggleHover(false)}
        >
          START NOW
        </button>
      </div>
    </div>

  );
}
