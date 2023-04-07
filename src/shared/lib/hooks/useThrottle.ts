import { useCallback, useRef } from 'react';

export const useThrottle = (cb: (...args: any[]) => void, delay: number) => {
  const throttleRef = useRef(false);
  const throttleId = useRef<NodeJS.Timeout | null>(null);
  return useCallback((...args: any[]) => {
    if (!throttleRef.current) {
      cb(...args);
      throttleRef.current = true;

      throttleId.current = setTimeout(() => {
        throttleRef.current = false;
      }, delay);
    }

    return () => {
      if (throttleId.current) {
        clearTimeout(throttleId.current);
      }
    };
  }, [cb, delay]);
};
