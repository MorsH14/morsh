import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 80;
const CURSOR_RADIUS = 120;
const PUSH_FORCE = 0.08;
const RETURN_SPEED = 0.03;

const shapes = ["dot", "dash", "plus"];

function createParticle(w, h) {
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    originX: 0,
    originY: 0,
    vx: 0,
    vy: 0,
    size: Math.random() * 3 + 1.5,
    shape: shapes[Math.floor(Math.random() * shapes.length)],
    opacity: Math.random() * 0.4 + 0.15,
    rotation: Math.random() * Math.PI * 2,
    rotationSpeed: (Math.random() - 0.5) * 0.02,
  };
}

const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const particlesRef = useRef([]);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Re-init particles on resize
      const particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = createParticle(canvas.width, canvas.height);
        p.originX = p.x;
        p.originY = p.y;
        particles.push(p);
      }
      particlesRef.current = particles;
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", handleMouse);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mouse = mouseRef.current;
      const particles = particlesRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Cursor interaction — push particles away
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CURSOR_RADIUS && dist > 0) {
          const force = (CURSOR_RADIUS - dist) / CURSOR_RADIUS;
          p.vx += (dx / dist) * force * PUSH_FORCE * 6;
          p.vy += (dy / dist) * force * PUSH_FORCE * 6;
        }

        // Spring back to origin
        p.vx += (p.originX - p.x) * RETURN_SPEED;
        p.vy += (p.originY - p.y) * RETURN_SPEED;

        // Damping
        p.vx *= 0.92;
        p.vy *= 0.92;

        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;

        // Boost opacity when displaced
        const displacement = Math.sqrt(
          (p.x - p.originX) ** 2 + (p.y - p.originY) ** 2
        );
        const alpha = Math.min(p.opacity + displacement * 0.004, 0.7);

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = alpha;

        // Green palette matching the site
        ctx.fillStyle = "rgb(55, 100, 55)";
        ctx.strokeStyle = "rgb(55, 100, 55)";
        ctx.lineWidth = 1.5;

        if (p.shape === "dot") {
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.shape === "dash") {
          const len = p.size * 3;
          ctx.beginPath();
          ctx.moveTo(-len / 2, 0);
          ctx.lineTo(len / 2, 0);
          ctx.stroke();
        } else if (p.shape === "plus") {
          const len = p.size * 2;
          ctx.beginPath();
          ctx.moveTo(-len / 2, 0);
          ctx.lineTo(len / 2, 0);
          ctx.moveTo(0, -len / 2);
          ctx.lineTo(0, len / 2);
          ctx.stroke();
        }

        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
};

export default ParticleCanvas;
