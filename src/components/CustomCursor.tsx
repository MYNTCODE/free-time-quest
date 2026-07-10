import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    function moveCursor(event: PointerEvent) {
      cursor?.style.setProperty("--cursor-x", `${event.clientX}px`);
      cursor?.style.setProperty("--cursor-y", `${event.clientY}px`);
    }

    window.addEventListener("pointermove", moveCursor);

    return () => {
      window.removeEventListener("pointermove", moveCursor);
    };
  }, []);

  return <div ref={cursorRef} className="customCursor" aria-hidden="true" />;
}
