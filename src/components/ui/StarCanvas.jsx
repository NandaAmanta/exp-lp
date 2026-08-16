"use client";
import { useEffect, useRef } from "react";

export default function StarCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let stars = [];
    let animId = null;
    let isVisible = false;

    function init() {
      const parent = canvas.parentElement;
      canvas.width = parent ? parent.clientWidth || window.innerWidth : window.innerWidth;
      canvas.height = parent ? parent.clientHeight || window.innerHeight : window.innerHeight;
      stars = [];
      const count = Math.min(38, Math.floor((canvas.width * canvas.height) / 16000));
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 0.75 + 0.15,
          op: Math.random() * 0.4 + 0.1,
          max: Math.random() * 0.25 + 0.5,
          min: Math.random() * 0.08 + 0.05,
          speed: Math.random() * 0.003 + 0.001,
          dir: 1,
        });
      }
    }

    function draw() {
      if (!isVisible) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        s.op += s.speed * s.dir;
        if (s.op >= s.max) {
          s.op = s.max;
          s.dir = -1;
        }
        if (s.op <= s.min) {
          s.op = s.min;
          s.dir = 1;
        }
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 248, 220, ${s.op})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!isVisible) {
              isVisible = true;
              init();
              draw();
            }
          } else {
            isVisible = false;
            if (animId) cancelAnimationFrame(animId);
          }
        });
      },
      { threshold: 0.05 }
    );

    const section = canvas.parentElement || canvas;
    observer.observe(section);

    const handleResize = () => {
      if (isVisible) {
        if (animId) cancelAnimationFrame(animId);
        init();
        draw();
      }
    };
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} className="star-canvas" aria-hidden="true" />;
}
