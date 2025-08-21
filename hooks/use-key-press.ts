import { useEffect } from 'react';

export function useKeyPress(
  callback: (event: KeyboardEvent) => void,
  keyCodes: string[]
) {
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (keyCodes.includes(event.code)) {
        callback(event);
      }
    };

    window.addEventListener('keydown', handler, { passive: true });
    return () => {
      window.removeEventListener('keydown', handler);
    };
  }, [callback, keyCodes]);
}
