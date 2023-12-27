import { useEffect, useRef } from "react";

const useClickOutSide = (ClickFn: (value: boolean) => void) => {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function HandleClick(e: MouseEvent) {
      if (targetRef.current && !targetRef.current.contains(e.target as Node)) {
        ClickFn(false);
      }
    }
    document.addEventListener("click", (e) => HandleClick(e), true);
    return () => document.removeEventListener("click", (e) => HandleClick(e), true);
  }, [ClickFn]);

  return targetRef;
};

export default useClickOutSide;
