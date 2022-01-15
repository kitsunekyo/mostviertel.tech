import { useRef, useEffect } from "react";
import { Button } from "src/components/Button";

let lastX;
let lastY;
let isDrawing;

export function PaintCanvas() {
  const canvasRef = useRef();
  const parentRef = useRef();
  const ctx = useRef();

  const clear = () => {
    ctx.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
  };

  useEffect(() => {
    function draw(e) {
      if (!isDrawing) return;

      ctx.current.beginPath();
      ctx.current.moveTo(lastX, lastY);
      ctx.current.lineTo(e.offsetX, e.offsetY);
      ctx.current.stroke();
      lastX = e.offsetX;
      lastY = e.offsetY;
    }

    ctx.current = canvasRef.current.getContext("2d");
    console.log(parentRef.current.clientWidth);
    canvasRef.current.width = parentRef.current.clientWidth;

    canvasRef.current.addEventListener("mousedown", (e) => {
      lastX = e.offsetX;
      lastY = e.offsetY;
      isDrawing = true;
    });
    canvasRef.current.addEventListener("mouseup", () => (isDrawing = false));
    canvasRef.current.addEventListener("mouseout", () => (isDrawing = false));
    canvasRef.current.addEventListener("mousemove", draw);

    return () => {
      // remove event listeners
    };
  }, []);

  return (
    <div>
      <div className="pb-4">
        <Button onClick={clear}>clear</Button>
      </div>
      <div className="w-full h-full border border-gray-300" ref={parentRef}>
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}
