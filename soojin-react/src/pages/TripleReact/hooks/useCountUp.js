import { useEffect, useState } from 'react';

const useCountUp = target => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const animationDuration = 2000;
    const totalFrames = 60;
    const frameDuration = animationDuration / totalFrames;

    let frame = 0;

    const counter = setInterval(() => {
      frame++; // 1부터 60까지 증가한다
      const currentCount = Math.round(target * (frame / totalFrames));
      console.log('frame1111', target / totalFrames);
      console.log('currentCount', currentCount);

      if (target >= currentCount) {
        setCount(currentCount);
      }

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  }, [target]);

  return count;
};

export default useCountUp;
