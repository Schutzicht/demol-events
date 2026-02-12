import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
    const [isHovering, setIsHovering] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX - 8);
            mouseY.set(e.clientY - 8);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-hover')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 bg-dme-teal rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                }}
                animate={{
                    scale: isHovering ? 2.5 : 1,
                }}
                transition={{ duration: 0.2 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-dme-teal rounded-full pointer-events-none z-[9998] opacity-50"
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                    x: -8,
                    y: -8,
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    opacity: isHovering ? 0 : 0.5
                }}
            />
            <style>{`
        body, a, button {
            cursor: none;
        }
        @media (max-width: 768px) {
            body, a, button {
                cursor: auto;
            }
            .fixed.z-\[9999\] {
                display: none;
            }
        }
      `}</style>
        </>
    );
}
