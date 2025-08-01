import { useEffect, useRef, ReactNode } from 'react';

interface ScrollFadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const ScrollFadeIn = ({ children, delay = 0, className = '' }: ScrollFadeInProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate');
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  return (
    <div ref={elementRef} className={`fade-in-up ${className}`}>
      {children}
    </div>
  );
};

export default ScrollFadeIn;