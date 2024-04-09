import { useContext, useEffect, useRef } from 'react';

function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();
  useEffect(() => {
    document.addEventListener('click', handleClick, listenCapturing);
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) handler();
    }

    return () => {
      document.removeEventListener('click', handleClick, listenCapturing);
    };
  }, [handler, listenCapturing]);
  return ref;
}

export default useOutsideClick;
