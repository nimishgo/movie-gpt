import { useCallback, useEffect, useRef, useState } from "react";
import "./carousel.css";

export default function CustomCarousel({ children }) {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const slider = useRef(null);

  const checkArrows = useCallback(() => {
    if (slider.current) {
      const { scrollLeft, scrollWidth, clientWidth } = slider.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
    }
  }, []);

  useEffect(() => {
    checkArrows();
    window.addEventListener("resize", checkArrows);
    return () => window.removeEventListener("resize", checkArrows);
  }, [checkArrows]);

  const handleMouseDown = useCallback((e) => {
    setIsDown(true);
    setStartX(e.pageX - slider.current.offsetLeft);
    setScrollLeft(slider.current.scrollLeft);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsDown(false);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDown(false);
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.current.offsetLeft;
      const walk = x - startX;
      slider.current.scrollLeft = scrollLeft - walk;
      checkArrows();
    },
    [isDown, startX, scrollLeft, checkArrows]
  );

  const scroll = useCallback(
    (direction) => {
      if (slider.current) {
        const scrollAmount = slider.current.clientWidth / 2;
        slider.current.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
        setTimeout(checkArrows, 500);
      }
    },
    [checkArrows]
  );

  return (
    <div className="carousel-container">
      {showLeftArrow && (
        <button className="arrow left-arrow" onClick={() => scroll("left")}>
          &lt;
        </button>
      )}
      <div
        className="items"
        ref={slider}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onScroll={checkArrows}
      >
        {children}
      </div>
      {showRightArrow && (
        <button className="arrow right-arrow" onClick={() => scroll("right")}>
          &gt;
        </button>
      )}
    </div>
  );
}
