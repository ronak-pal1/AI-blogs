'use client';

import { useEffect, useRef } from "react";

const CanvasBG = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function animate() {
      if (!ctx) return;
      if (!canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
     for(let i = 0; i < 200; i++){
        ctx.beginPath();
        ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.strokeStyle = "#f7ceb3";
        ctx.stroke();
      }
      //delay
      setTimeout(() => {
        requestAnimationFrame(animate);
      }, 500);
    }

    animate();
  }, []);

  return (
    <div className="w-full h-screeen absolute top-0 left-0 -z-10">
      <canvas ref={canvasRef} id="bg" className="w-full h-full" />
    </div>
  );
};

export default CanvasBG;
