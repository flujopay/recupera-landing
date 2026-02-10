"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface SliderItem {
  id: number | string;
  content: ReactNode;
}

interface LogoSliderProps {
  items: SliderItem[];
  className?: string;
}

export const LogoSlider = ({ items, className = "" }: LogoSliderProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", checkScrollButtons);
      return () => slider.removeEventListener("scroll", checkScrollButtons);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 200;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`relative flex items-center gap-2 ${className}`}>
      {/* Botón izquierda */}
      <button
        type="button"
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-brand-primary-dark transition-opacity ${
          canScrollLeft ? "opacity-100" : "opacity-30 cursor-not-allowed"
        }`}
        aria-label="Anterior"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Contenedor del slider */}
      <div
        ref={sliderRef}
        className="flex items-center gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item) => (
          <div key={item.id} className="shrink-0">
            {item.content}
          </div>
        ))}
      </div>

      {/* Botón derecha */}
      <button
        type="button"
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
        className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-[#3771d1] transition-opacity ${
          canScrollRight ? "opacity-100" : "opacity-30 cursor-not-allowed"
        }`}
        aria-label="Siguiente"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
};
