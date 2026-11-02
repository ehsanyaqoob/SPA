"use client";

import { useEffect, useRef } from "react";

const SPEED = 0.25;
const AREA_PER_PARTICLE = 15000;
const MIN_PARTICLES = 25;
const MAX_PARTICLES = 90;
const LINK_OPACITY = 0.3;
const MOUSE_RADIUS = 220;
const FRAME_MS = 1000 / 30;
const COLORS = ["255, 255, 255", "100, 149, 237"];

type Particle = { x: number; y: number; vx: number; vy: number; size: number; sprite: HTMLCanvasElement };

// Pre-renders each dot's soft glow once, which is far cheaper than a live canvas shadow.
function createSprite(color: string) {
  const size = 32;
  const sprite = document.createElement("canvas");
  sprite.width = sprite.height = size;
  const ctx = sprite.getContext("2d")!;
  const glow = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  glow.addColorStop(0, `rgba(${color}, 1)`);
  glow.addColorStop(0.18, `rgba(${color}, 0.95)`);
  glow.addColorStop(0.3, `rgba(${color}, 0.2)`);
  glow.addColorStop(1, `rgba(${color}, 0)`);
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, size, size);
  return sprite;
}

export function NexusBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const sprites = COLORS.map(createSprite);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouse = { x: 0, y: 0, active: false };
    let width = 0;
    let height = 0;
    let linkDistance = 170;
    let particles: Particle[] = [];
    let frameId = 0;
    let lastFrame = 0;

    const makeParticle = (): Particle => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 2 * SPEED,
      vy: (Math.random() - 0.5) * 2 * SPEED,
      size: 4 + Math.random() * 4,
      sprite: Math.random() > 0.7 ? sprites[1] : sprites[0],
    });

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const linkDistanceSquared = linkDistance * linkDistance;

      ctx.lineWidth = 0.8;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distanceSquared = dx * dx + dy * dy;
          if (distanceSquared > linkDistanceSquared) continue;
          ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - Math.sqrt(distanceSquared) / linkDistance) * LINK_OPACITY})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }

        if (mouse.active) {
          const distance = Math.hypot(a.x - mouse.x, a.y - mouse.y);
          if (distance < MOUSE_RADIUS) {
            ctx.strokeStyle = `rgba(100, 149, 237, ${(1 - distance / MOUSE_RADIUS) * 0.4})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      for (const particle of particles) {
        ctx.drawImage(particle.sprite, particle.x - particle.size, particle.y - particle.size, particle.size * 2, particle.size * 2);
      }
    };

    const step = (time: number) => {
      frameId = requestAnimationFrame(step);
      if (time - lastFrame < FRAME_MS) return;
      lastFrame = time;
      for (const particle of particles) {
        particle.x = (particle.x + particle.vx + width) % width;
        particle.y = (particle.y + particle.vy + height) % height;
      }
      draw();
    };

    // Keeps existing dots in place when the window changes, so nothing jumps.
    const resize = () => {
      const previousWidth = width;
      const previousHeight = height;
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      const scale = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * scale;
      canvas.height = height * scale;
      ctx.setTransform(scale, 0, 0, scale, 0, 0);
      linkDistance = width < 768 ? 120 : 170;

      if (previousWidth && previousHeight) {
        for (const particle of particles) {
          particle.x *= width / previousWidth;
          particle.y *= height / previousHeight;
        }
      }
      const target = Math.round(Math.min(MAX_PARTICLES, Math.max(MIN_PARTICLES, (width * height) / AREA_PER_PARTICLE)));
      while (particles.length < target) particles.push(makeParticle());
      particles = particles.slice(0, target);
      draw();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    const handleMouseLeave = () => {
      mouse.active = false;
    };

    resize();
    window.addEventListener("resize", resize);
    if (!reducedMotion) {
      window.addEventListener("mousemove", handleMouseMove);
      document.documentElement.addEventListener("mouseleave", handleMouseLeave);
      frameId = requestAnimationFrame(step);
    }

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // 100lvh keeps the canvas steady when a phone's address bar hides or shows.
  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ height: "100lvh" }}
      className="pointer-events-none fixed left-0 top-0 -z-30 w-full bg-black"
    />
  );
}
