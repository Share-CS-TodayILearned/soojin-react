import { useEffect, useState } from 'react';
import { easeInOutQuad } from '../utils/animation';

const useCountUp = target => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const animationDuration = 2000;
    const frameDuration = 2000 / 60;
    const totalFrames = Math.round(animationDuration / frameDuration); // 60으로 constant한 값
    let frame = 0;

    const counter = setInterval(() => {
      frame++; // 0에서 60까지 증가한다
      const progress = easeInOutQuad(frame / totalFrames);
      console.log('progress', progress);
      const currentCount = Math.round(target * progress);

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
