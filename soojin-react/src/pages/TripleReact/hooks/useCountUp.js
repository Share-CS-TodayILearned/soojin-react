import { useEffect, useState } from 'react';

const useCountUp = target => {
  const [displayNumber, setDisplayNumber] = useState(0);

  useEffect(() => {
    const animationDuration = 2000;
    const totalFrames = 90;
    const frameDuration = animationDuration / totalFrames;

    let frame = 0;

    const counter = setInterval(() => {
      frame += 1;
      const currentCount = Math.round(target * (frame / totalFrames));

      if (target >= currentCount) {
        setDisplayNumber(currentCount);
      }

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  }, [target]);

  return displayNumber;
};

export default useCountUp;
