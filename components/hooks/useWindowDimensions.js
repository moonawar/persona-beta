import { useState, useEffect } from 'react';

// This was scrapped from https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
// modified a bit for next js rendering which i was not actually fully understand
export default function useWindowDimensions() {
  function getWindowDimensions() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(1366, 768);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    
  }, []);

  return windowDimensions;
}