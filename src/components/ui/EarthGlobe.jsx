"use client";
import { useEffect, useRef } from "react";

export default function EarthGlobe({ sectionId = "about" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = document.getElementById(sectionId);
    if (!canvas || !section) return;

    const ctx = canvas.getContext("2d");
    let width = 440,
      height = 440;
    let animId = null;
    let isVisible = false;
    let rotationY = 0;
    const tiltZ = 0.38;

    const points = [];
    const radius = 170;

    for (let lat = -75; lat <= 75; lat += 25) {
      const radLat = (lat * Math.PI) / 180;
      const rLat = Math.cos(radLat) * radius;
      const yLat = Math.sin(radLat) * radius;
      const numDots = Math.floor(rLat * 0.35);
      for (let i = 0; i < numDots; i++) {
        const lon = (i / numDots) * Math.PI * 2;
        points.push({
          x: Math.cos(lon) * rLat,
          y: yLat,
          z: Math.sin(lon) * rLat,
          type: "grid",
        });
      }
    }

    const landmasses = [
      { lat: 10, lon: 110, size: 30 },
      { lat: -5, lon: 115, size: 22 },
      { lat: 35, lon: 100, size: 34 },
      { lat: 30, lon: 135, size: 24 },
      { lat: 20, lon: 80, size: 28 },
      { lat: 50, lon: 15, size: 26 },
      { lat: 40, lon: -5, size: 22 },
      { lat: 0, lon: 20, size: 32 },
      { lat: -20, lon: 25, size: 24 },
      { lat: 25, lon: 45, size: 24 },
      { lat: 40, lon: -100, size: 32 },
      { lat: 20, lon: -100, size: 22 },
      { lat: -15, lon: -60, size: 30 },
      { lat: -35, lon: -65, size: 20 },
      { lat: -25, lon: 135, size: 26 },
    ];

    landmasses.forEach((land) => {
      const centerLat = (land.lat * Math.PI) / 180;
      const centerLon = (land.lon * Math.PI) / 180;
      for (let i = 0; i < Math.floor(land.size * 2.2); i++) {
        const dLat = (Math.random() - 0.5) * 0.48;
        const dLon = (Math.random() - 0.5) * 0.58;
        const lat = centerLat + dLat;
        const lon = centerLon + dLon;
        const rLat = Math.cos(lat) * radius;
        points.push({
          x: Math.cos(lon) * rLat,
          y: Math.sin(lat) * radius,
          z: Math.sin(lon) * rLat,
          type: "land",
        });
      }
    });

    function resize() {
      const container = canvas.parentElement;
      width = canvas.width = container.clientWidth || 440;
      height = canvas.height = container.clientHeight || 440;
    }

    function render() {
      if (!isVisible) return;
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      rotationY += 0.005;

      const glow = ctx.createRadialGradient(centerX, centerY, radius * 0.85, centerX, centerY, radius * 1.25);
      glow.addColorStop(0, "rgba(245, 158, 11, 0.20)");
      glow.addColorStop(0.5, "rgba(245, 158, 11, 0.05)");
      glow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.25, 0, Math.PI * 2);
      ctx.fill();

      const cosY = Math.cos(rotationY);
      const sinY = Math.sin(rotationY);
      const cosZ = Math.cos(tiltZ);
      const sinZ = Math.sin(tiltZ);

      points.forEach((p) => {
        const rx = p.x * cosY - p.z * sinY;
        const rz = p.x * sinY + p.z * cosY;
        const ry = p.y;

        const x3d = rx * cosZ - ry * sinZ;
        const y3d = rx * sinZ + ry * cosZ;
        const z3d = rz;

        const isFront = z3d > -40;
        const scale = 400 / (400 - z3d * 0.3);
        const px = centerX + x3d * scale * 0.95;
        const py = centerY + y3d * scale * 0.95;

        const depthAlpha = z3d > 0 ? (z3d / radius) * 0.65 + 0.35 : (1 + z3d / radius) * 0.2;

        if (p.type === "land") {
          const dotRadius = z3d > 0 ? (z3d / radius) * 1.2 + 1.3 : 0.8;
          ctx.beginPath();
          ctx.arc(px, py, dotRadius, 0, Math.PI * 2);
          ctx.fillStyle =
            z3d > 0 ? `rgba(245, 158, 11, ${depthAlpha})` : `rgba(217, 119, 6, ${depthAlpha * 0.4})`;
          ctx.fill();
        } else if (isFront) {
          ctx.beginPath();
          ctx.arc(px, py, 0.75, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 245, 210, ${depthAlpha * 0.3})`;
          ctx.fill();
        }
      });

      animId = requestAnimationFrame(render);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!isVisible) {
              isVisible = true;
              resize();
              render();
            }
          } else {
            isVisible = false;
            if (animId) cancelAnimationFrame(animId);
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(section);
    window.addEventListener("resize", resize, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resize);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [sectionId]);

  return <canvas ref={canvasRef} id="earth-canvas" className="earth-canvas" />;
}
