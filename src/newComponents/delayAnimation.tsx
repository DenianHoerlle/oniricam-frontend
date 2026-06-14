import { useEffect, useState } from "react";

type DelayAnimationProps = { children: React.ReactNode; delay: number };

const DelayAnimation = (props: DelayAnimationProps): React.ReactNode => {
  const [shouldShow, setShouldShow] = useState(false);

  const { children, delay } = props;

  useEffect(() => {
    const animationDelay = setTimeout(() => setShouldShow(true), delay);

    return () => clearTimeout(animationDelay);
  }, [delay]);

  const wrapperClassNames = shouldShow ? "animate-appear" : "opacity-0";

  return <div className={wrapperClassNames}>{children}</div>;
};

export { DelayAnimation };
