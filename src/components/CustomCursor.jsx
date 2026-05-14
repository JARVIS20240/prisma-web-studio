import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Motion values for tracking mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the Follower Ring
  const ringX = useSpring(mouseX, { stiffness: 150, damping: 25, mass: 0.5 });
  const ringY = useSpring(mouseY, { stiffness: 150, damping: 25, mass: 0.5 });

  useEffect(() => {
    // Check for touch device
    const checkMobile = window.matchMedia("(pointer: coarse)").matches;
    setIsMobile(checkMobile);
    if (checkMobile) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable =
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('select') ||
        target.closest('textarea') ||
        target.closest('[role="button"]');

      setIsHovered(!!isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <>
      {/* Element 1: The Core Dot (Instant) */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          x: mouseX,
          y: mouseY,
          translateX: '-4px',
          translateY: '-4px',
          width: '8px',
          height: '8px',
          backgroundColor: '#DEDBC8',
          borderRadius: '9999px',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference'
        }}
      />

      {/* Element 2: The Radar Ring (Follower) */}
      <motion.div
        animate={{
          width: isHovered ? 48 : 24,
          height: isHovered ? 48 : 24,
          opacity: isHovered ? 0.2 : 1
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          x: ringX,
          y: ringY,
          translateX: isHovered ? '-24px' : '-12px',
          translateY: isHovered ? '-24px' : '-12px',
          border: '1px solid rgba(168, 85, 247, 0.6)',
          borderRadius: '9999px',
          pointerEvents: 'none',
          zIndex: 9999
        }}
      />
    </>
  );
};

export default CustomCursor;
