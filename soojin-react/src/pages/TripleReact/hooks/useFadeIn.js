import { useState, useEffect } from 'react';

const useFadeIn = () => {
  const [opacity, setOpacity] = useState(false);
  const [transY, setTransY] = useState(false);

  useEffect(() => {
    setOpacity(true);
    setTransY(true);
  }, []);

  return [opacity, transY];
};

export default useFadeIn;
