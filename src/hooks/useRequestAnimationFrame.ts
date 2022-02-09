import * as React from 'react';

type Callback = (deltaTime: number) => void;

const useRequestAnimationFrame = (callback: Callback, deps: React.DependencyList) => {
  React.useEffect(() => {
    let rAF: number | undefined;
    let elapsed: number | undefined;

    const animate = (time: number) => {
      if (elapsed !== undefined) {
        const deltaTime = time - elapsed;
        callback(deltaTime);
      }

      elapsed = time;
      rAF = window.requestAnimationFrame(animate);
    };

    rAF = window.requestAnimationFrame(animate);

    return () => {
      if (rAF) window.cancelAnimationFrame(rAF);
    };

  // eslint-disable-next-line
  }, [callback, ...deps]);
};

export default useRequestAnimationFrame;
