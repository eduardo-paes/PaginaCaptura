import { useState, useEffect } from 'react';

export default function useWindowDimensions() {
  const [wdDimension, setWdDimension] = useState(getWindowDimensions());
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  }
  useEffect(() => {
    const handleResize = () => setWdDimension(getWindowDimensions());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return wdDimension;
}