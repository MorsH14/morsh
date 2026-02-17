import { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 45;
const MOUSE_RADIUS = 120;
const MOUSE_FORCE = 0.8;

// Color palette matching the design system
const COLORS = [
  { r: 55, g: 100, b: 55 },   // primary green
  { r: 70, g: 120, b: 70 },   // lighter green
  { r: 80, g: 140, b: 80 },   // even lighter
  { r: 40, g: 80, b: 40 },    // darker green
  { r: 200, g: 200, b: 200 }, // subtle gray (accent)
];

const SHAPES = ['circle', 'ring', 'triangle', 'square'];

// Depth layers: back (slow, small, dim) -> front (faster, larger, brighter)
const DEPTH_CONFIG = [
  { speed: 0.15, size: [2, 5], opacity: [0.08, 0.15] },   // back
  { speed: 0.3,  size: [4, 9], opacity: [0.12, 0.25] },   // mid
  { speed: 0.5,  size: [6, 14], opacity: [0.18, 0.35] },  // front
];

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

function createParticle(width, height, forceBottom = false) {
  const depthIndex = Math.random() < 0.4 ? 0 : Math.random() < 0.6 ? 1 : 2;
  const depth = DEPTH_CONFIG[depthIndex];
  const color = COLORS[Math.floor(Math.random() * COLORS.length)];
  const size = randomRange(depth.size[0], depth.size[1]);
  const opacity = randomRange(depth.opacity[0], depth.opacity[1]);

  return {
    x: Math.random() * width,
    y: forceBottom ? height + Math.random() * 100 : Math.random() * height,
    vx: randomRange(-0.2, 0.2),
    vy: -randomRange(depth.speed * 0.5, depth.speed), // negative = upward
    size,
    baseSize: size,
    opacity,
    baseOpacity: opacity,
    color,
    shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
    depthIndex,
    depth,
    rotation: Math.random() * Math.PI * 2,
    rotationSpeed: randomRange(-0.008, 0.008),
    wobbleOffset: Math.random() * Math.PI * 2,
    wobbleSpeed: randomRange(0.003, 0.008),
    wobbleAmount: randomRange(0.1, 0.4),
    time: 0,
  };
}

function drawParticle(ctx, p) {
  ctx.save();
  ctx.translate(p.x, p.y);
  ctx.rotate(p.rotation);
  ctx.globalAlpha = p.opacity;

  const { r, g, b } = p.color;
  const fillColor = `rgb(${r}, ${g}, ${b})`;
  const strokeColor = `rgba(${r}, ${g}, ${b}, 0.8)`;

  switch (p.shape) {
    case 'circle':
      ctx.beginPath();
      ctx.arc(0, 0, p.size, 0, Math.PI * 2);
      ctx.fillStyle = fillColor;
      ctx.fill();
      break;

    case 'ring':
      ctx.beginPath();
      ctx.arc(0, 0, p.size, 0, Math.PI * 2);
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = Math.max(1, p.size * 0.25);
      ctx.stroke();
      break;

    case 'triangle': {
      const s = p.size;
      ctx.beginPath();
      ctx.moveTo(0, -s);
      ctx.lineTo(s * 0.866, s * 0.5);
      ctx.lineTo(-s * 0.866, s * 0.5);
      ctx.closePath();
      ctx.fillStyle = fillColor;
      ctx.fill();
      break;
    }

    case 'square':
      ctx.fillStyle = fillColor;
      ctx.fillRect(-p.size * 0.7, -p.size * 0.7, p.size * 1.4, p.size * 1.4);
      break;

    default:
      break;
  }

  ctx.restore();
}

export default function ParticleBackground() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function initParticles() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      particlesRef.current = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particlesRef.current.push(createParticle(w, h, false));
      }
    }

    function animate() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      const mouse = mouseRef.current;

      for (const p of particlesRef.current) {
        p.time += 1;

        // Wobble (horizontal sine wave drift)
        const wobble = Math.sin(p.time * p.wobbleSpeed + p.wobbleOffset) * p.wobbleAmount;
        p.x += p.vx + wobble;
        p.y += p.vy;

        // Rotation for triangles and squares
        if (p.shape === 'triangle' || p.shape === 'square') {
          p.rotation += p.rotationSpeed;
        }

        // Mouse repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (1 - dist / MOUSE_RADIUS) * MOUSE_FORCE;
          const angle = Math.atan2(dy, dx);
          p.x += Math.cos(angle) * force * (1 + p.depthIndex * 0.5);
          p.y += Math.sin(angle) * force * (1 + p.depthIndex * 0.5);
        }

        // Wrap around: re-enter from bottom when exiting top
        if (p.y < -p.size * 2) {
          p.x = Math.random() * w;
          p.y = h + p.size * 2;
          p.vx = randomRange(-0.2, 0.2);
        }
        // Wrap horizontal
        if (p.x < -p.size * 2) p.x = w + p.size;
        if (p.x > w + p.size * 2) p.x = -p.size;

        drawParticle(ctx, p);
      }

      rafRef.current = requestAnimationFrame(animate);
    }

    resize();
    initParticles();
    animate();

    function handleMouseMove(e) {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    }

    function handleMouseLeave() {
      mouseRef.current = { x: -9999, y: -9999 };
    }

    function handleResize() {
      resize();
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  );
}
