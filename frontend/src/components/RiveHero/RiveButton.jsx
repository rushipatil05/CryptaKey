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
      <h1 className="text-white text-5xl lg:text-6xl pb-6">Welcome to CryptaKey</h1>

      <div className="relative w-48 h-16 mx-auto">
        <RiveComponent
          className="absolute inset-0 w-full h-full pointer-events-none"
          aria-hidden="true"
        />
        <button
          onClick={() => setstartnow(false)}
          className="
    absolute inset-0 flex items-center justify-center w-full h-full 
    text-white text-sm lg:text-lg cursor-pointer 
    focus:outline-none focus:ring-0 active:outline-none active:ring-0"
          onMouseEnter={() => toggleHover(true)}
          onMouseLeave={() => toggleHover(false)}
        >
          START NOW
        </button>
      </div>
    </div>
  );
}
