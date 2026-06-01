import { useEffect, useRef } from 'react';
import { useTheme } from '../../src/ThemeContext';
import gsap from 'gsap';

export default function Cursor() {
  const circle = useRef();
  const mouse = useRef({ x: 0, y: 0 });
  const { theme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      gsap.set(circle.current, {
        x: e.clientX,
        y: e.clientY,
        xPercent: -50,
        yPercent: -50,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={circle}
      style={{
        width: '15px',
        height: '15px',
        borderRadius: '50%',
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 9999,
        backgroundColor: theme === 'dark' ? '#f0f0f0' : '#000000',
        transition: 'background-color 0.3s',
      }}
    />
  );
}
