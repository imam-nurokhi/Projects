"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
}

interface GeometricShape {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  type: "cube" | "sphere" | "wireframe";
  size: number;
  color: string;
}

const COLORS = ["#818cf8", "#f472b6", "#fb923c"];

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();

    const particles: Particle[] = Array.from({ length: 130 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      z: Math.random() * 0.8 + 0.2,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: Math.random() * 1.5 + 0.5,
    }));

    const shapeTypes: ("cube" | "sphere" | "wireframe")[] = ["cube", "sphere", "wireframe"];
    const shapes: GeometricShape[] = Array.from({ length: 6 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.015,
      type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
      size: Math.random() * 100 + 60,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));

    let animId: number;
    let time = 0;

    const drawWireframeBox = (x: number, y: number, size: number, rotation: number, color: string) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.strokeStyle = color;
      ctx.globalAlpha = 0.12;
      ctx.lineWidth = 1.5;

      const half = size / 2;
      const vertices = [
        [-half, -half],
        [half, -half],
        [half, half],
        [-half, half],
      ];

      ctx.beginPath();
      ctx.moveTo(vertices[0][0], vertices[0][1]);
      for (let i = 1; i < vertices.length; i++) {
        ctx.lineTo(vertices[i][0], vertices[i][1]);
      }
      ctx.closePath();
      ctx.stroke();

      ctx.restore();
    };

    const drawWireframeSphere = (x: number, y: number, radius: number, color: string) => {
      ctx.strokeStyle = color;
      ctx.globalAlpha = 0.1;
      ctx.lineWidth = 1;

      for (let lat = 0; lat < 3; lat++) {
        ctx.beginPath();
        const r = radius * Math.cos((lat * Math.PI) / 3);
        const yOffset = y - radius * Math.cos((lat * Math.PI) / 3);
        ctx.arc(x, yOffset, Math.abs(r), 0, Math.PI * 2);
        ctx.stroke();
      }

      for (let lon = 0; lon < 4; lon++) {
        ctx.beginPath();
        const angle = (lon * Math.PI) / 2;
        ctx.moveTo(x + radius * Math.cos(angle), y - radius * Math.sin(angle));
        ctx.lineTo(x - radius * Math.cos(angle), y + radius * Math.sin(angle));
        ctx.stroke();
      }
    };

    const draw = () => {
      time += 0.005;
      ctx.fillStyle = "#08080f";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw geometric shapes
      for (const shape of shapes) {
        shape.x += shape.vx;
        shape.y += shape.vy;
        shape.rotation += shape.rotationSpeed;

        if (shape.x < -shape.size) shape.x = canvas.width + shape.size;
        if (shape.x > canvas.width + shape.size) shape.x = -shape.size;
        if (shape.y < -shape.size) shape.y = canvas.height + shape.size;
        if (shape.y > canvas.height + shape.size) shape.y = -shape.size;

        if (shape.type === "cube") {
          drawWireframeBox(shape.x, shape.y, shape.size, shape.rotation, shape.color);
        } else if (shape.type === "sphere") {
          drawWireframeSphere(shape.x, shape.y, shape.size / 2, shape.color);
        } else {
          drawWireframeBox(shape.x, shape.y, shape.size * 0.7, shape.rotation, shape.color);
        }
      }

      const mx = mouseRef.current.x / canvas.width - 0.5;
      const my = mouseRef.current.y / canvas.height - 0.5;

      // Draw particles
      for (const p of particles) {
        p.x += p.vx + mx * 0.2;
        p.y += p.vy + my * 0.2;

        if (p.x < 0) p.x = canvas.width;
        else if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        else if (p.y > canvas.height) p.y = 0;

        const alpha = 0.35 + p.z * 0.35 + Math.sin(time + p.z * 8) * 0.1;
        ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.z, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    };

    draw();

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onResize = () => setSize();

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}
