import { useEffect, useState } from "react";
import ConfettiGenerator from "confetti-js";

const keycode =
  "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba";
const pressed = [];

export function useCheatcode() {
  const [hasWon, setHasWon] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e) => {
      pressed.push(e.key);
      pressed.splice(-keycode.length - 1, pressed.length - keycode.length);

      if (pressed.join("") === keycode) {
        setHasWon(true);
      }
    };
    window.addEventListener("keyup", handleKeyPress);
    return () => {
      window.removeEventListener("keyup", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    if (!hasWon) return;

    const canvas = document.createElement("canvas");
    canvas.id = "winner-canvas";
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "-1";
    document.body.appendChild(canvas);
    const confettiSettings = { target: "winner-canvas" };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => {
      confetti.clear();
      canvas.remove();
    };
  }, [hasWon]);
}
