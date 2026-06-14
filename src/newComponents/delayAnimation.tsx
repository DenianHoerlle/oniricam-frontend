import { useEffect, useRef, useState } from "react";

type DelayAnimationProps = {
  children: React.ReactNode;
  delay: number;
  className?: string;
};

const DelayAnimation = (props: DelayAnimationProps): React.ReactNode => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  console.log("isVisible", isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 },
    );

    const currentElement = ref.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  const [shouldShow, setShouldShow] = useState(false);

  const { children, className, delay } = props;

  useEffect(() => {
    if (!isVisible) return;

    const animationDelay = setTimeout(() => setShouldShow(true), delay);

    return () => clearTimeout(animationDelay);
  }, [delay, isVisible]);

  const wrapperClassNames = shouldShow
    ? `w-full ${className} animate-appear`
    : "w-full opacity-0";

  return (
    <div ref={ref} className={wrapperClassNames}>
      {children}
    </div>
  );
};

export { DelayAnimation };
