"use client";

import { useEffect, useRef } from 'react';

export default function DoublePendulum() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Double pendulum parameters
    const g = 9.81; // gravity
    const m1 = 10; // mass 1
    const m2 = 10; // mass 2
    const l1 = 150; // length 1
    const l2 = 150; // length 2

    let theta1 = Math.PI / 2; // angle 1
    let theta2 = Math.PI / 2; // angle 2
    let omega1 = 0; // angular velocity 1
    let omega2 = 0; // angular velocity 2

    // Position in right side for wide screens, center for narrow
    const originX = canvas.width > 1024 ? canvas.width * 0.75 : canvas.width * 0.5;
    const originY = canvas.height > 600 ? canvas.height * 0.3 : 200;

    const trail: { x: number; y: number }[] = [];
    const maxTrailLength = 300;

    // RK4 integration for accurate physics
    const derivatives = (t1: number, t2: number, o1: number, o2: number) => {
      const delta = t2 - t1;
      const den1 = (m1 + m2) * l1 - m2 * l1 * Math.cos(delta) * Math.cos(delta);
      const den2 = (l2 / l1) * den1;

      const dtheta1 = o1;
      const dtheta2 = o2;

      const domega1 =
        (m2 * l1 * o1 * o1 * Math.sin(delta) * Math.cos(delta) +
          m2 * g * Math.sin(t2) * Math.cos(delta) +
          m2 * l2 * o2 * o2 * Math.sin(delta) -
          (m1 + m2) * g * Math.sin(t1)) /
        den1;

      const domega2 =
        (-m2 * l2 * o2 * o2 * Math.sin(delta) * Math.cos(delta) +
          (m1 + m2) * g * Math.sin(t1) * Math.cos(delta) -
          (m1 + m2) * l1 * o1 * o1 * Math.sin(delta) -
          (m1 + m2) * g * Math.sin(t2)) /
        den2;

      return [dtheta1, dtheta2, domega1, domega2];
    };

    const rk4Step = (dt: number) => {
      const k1 = derivatives(theta1, theta2, omega1, omega2);
      const k2 = derivatives(
        theta1 + k1[0] * dt / 2,
        theta2 + k1[1] * dt / 2,
        omega1 + k1[2] * dt / 2,
        omega2 + k1[3] * dt / 2
      );
      const k3 = derivatives(
        theta1 + k2[0] * dt / 2,
        theta2 + k2[1] * dt / 2,
        omega1 + k2[2] * dt / 2,
        omega2 + k2[3] * dt / 2
      );
      const k4 = derivatives(
        theta1 + k3[0] * dt,
        theta2 + k3[1] * dt,
        omega1 + k3[2] * dt,
        omega2 + k3[3] * dt
      );

      theta1 += (k1[0] + 2 * k2[0] + 2 * k3[0] + k4[0]) * dt / 6;
      theta2 += (k1[1] + 2 * k2[1] + 2 * k3[1] + k4[1]) * dt / 6;
      omega1 += (k1[2] + 2 * k2[2] + 2 * k3[2] + k4[2]) * dt / 6;
      omega2 += (k1[3] + 2 * k2[3] + 2 * k3[3] + k4[3]) * dt / 6;
    };

    const animate = () => {
      // Update physics (smaller timestep for stability)
      for (let i = 0; i < 5; i++) {
        rk4Step(0.01);
      }

      // Calculate positions
      const x1 = originX + l1 * Math.sin(theta1);
      const y1 = originY + l1 * Math.cos(theta1);
      const x2 = x1 + l2 * Math.sin(theta2);
      const y2 = y1 + l2 * Math.cos(theta2);

      // Add to trail
      trail.push({ x: x2, y: y2 });
      if (trail.length > maxTrailLength) {
        trail.shift();
      }

      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Brand colors: ocean (#3b82f6), violet (#8b5cf6), sky (#06b6d4)
      const brandColors = [
        { r: 59, g: 130, b: 246 },   // ocean
        { r: 139, g: 92, b: 246 },   // violet
        { r: 6, g: 182, b: 212 }     // sky
      ];

      // Draw trail with brand color gradient
      for (let i = 0; i < trail.length - 1; i++) {
        const alpha = i / trail.length;

        // Interpolate between brand colors
        let color;
        if (alpha < 0.5) {
          const t = alpha * 2;
          color = {
            r: Math.round(brandColors[0].r + (brandColors[1].r - brandColors[0].r) * t),
            g: Math.round(brandColors[0].g + (brandColors[1].g - brandColors[0].g) * t),
            b: Math.round(brandColors[0].b + (brandColors[1].b - brandColors[0].b) * t),
          };
        } else {
          const t = (alpha - 0.5) * 2;
          color = {
            r: Math.round(brandColors[1].r + (brandColors[2].r - brandColors[1].r) * t),
            g: Math.round(brandColors[1].g + (brandColors[2].g - brandColors[1].g) * t),
            b: Math.round(brandColors[1].b + (brandColors[2].b - brandColors[1].b) * t),
          };
        }

        ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha * 0.4})`;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(trail[i].x, trail[i].y);
        ctx.lineTo(trail[i + 1].x, trail[i + 1].y);
        ctx.stroke();
      }

      // Draw pendulum arms (ocean color)
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.4)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(originX, originY);
      ctx.lineTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      // Draw pendulum bobs with brand colors
      ctx.fillStyle = 'rgba(59, 130, 246, 0.6)'; // ocean
      ctx.beginPath();
      ctx.arc(x1, y1, 10, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = 'rgba(139, 92, 246, 0.7)'; // violet
      ctx.beginPath();
      ctx.arc(x2, y2, 12, 0, Math.PI * 2);
      ctx.fill();

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
    />
  );
}
