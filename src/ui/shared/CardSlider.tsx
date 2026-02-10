"use client";

import React, { useEffect, useMemo, useState } from "react";

type BaseSettings = {
  dots: boolean;
  infinite: boolean;
  slidesToShow: number;
  slidesToScroll: number;
  initialSlide?: number;
  onSlideChange?: (currentIndex: number) => void;
};

type ResponsiveItem = {
  breakpoint: number;
  settings: Partial<BaseSettings>;
};

type CarouselProps = Partial<BaseSettings> & {
  speed?: number;
  responsive?: ResponsiveItem[];
  children: React.ReactNode | React.ReactNode[];
  className?: string;
};

export const Carousel = ({
  dots = false,
  infinite = false,
  slidesToShow = 1,
  slidesToScroll = 1,
  initialSlide = 0,
  speed = 500,
  responsive = [],
  children,
  onSlideChange,
  className = "",
}: CarouselProps) => {
  const items = useMemo(() => React.Children.toArray(children), [children]);
  const total = items.length;

  const [cfg, setCfg] = useState<BaseSettings>({
    dots,
    infinite,
    slidesToShow,
    slidesToScroll,
    initialSlide,
  });

  const [current, setCurrent] = useState<number>(
    Math.max(0, Math.min(initialSlide, Math.max(0, total - slidesToShow)))
  );

  useEffect(() => {
    if (onSlideChange) {
      onSlideChange(current);
    }
  }, [current, onSlideChange]);

  useEffect(() => {
    const apply = () => {
      const base: BaseSettings = {
        dots,
        infinite,
        slidesToShow,
        slidesToScroll,
        initialSlide,
      };

      const sorted = [...responsive].sort((a, b) => b.breakpoint - a.breakpoint);
      let merged = { ...base };

      for (const r of sorted) {
        if (window.innerWidth <= r.breakpoint) {
          merged = { ...merged, ...r.settings };
        }
      }

      merged.slidesToShow = Math.max(1, Math.min(merged.slidesToShow || 1, total || 1));
      merged.slidesToScroll = Math.max(1, merged.slidesToScroll || 1);

      setCfg(merged);

      const maxIndex = Math.max(0, total - merged.slidesToShow);
      if (current > maxIndex) setCurrent(maxIndex);
    };

    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, [dots, infinite, slidesToShow, slidesToScroll, initialSlide, responsive, total]);

  const maxIndex = Math.max(0, total - cfg.slidesToShow);

  const next = () => {
    const candidate = current + cfg.slidesToScroll;
    if (candidate > maxIndex) {
      setCurrent(cfg.infinite ? 0 : maxIndex);
    } else {
      setCurrent(candidate);
    }
  };

  const prev = () => {
    const candidate = current - cfg.slidesToScroll;
    if (candidate < 0) {
      setCurrent(cfg.infinite ? maxIndex : 0);
    } else {
      setCurrent(candidate);
    }
  };

  const pageCount = total <= cfg.slidesToShow ? 1 : Math.floor(maxIndex / cfg.slidesToScroll) + 1;
  const activeDot = Math.min(Math.floor(current / cfg.slidesToScroll), pageCount - 1);
  const isMovable = total > cfg.slidesToShow;

  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center gap-2 px-4">
        {isMovable && (
          <button
            type="button"
            onClick={prev}
            disabled={!cfg.infinite && current === 0}
            className={`shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-brand-primary-dark shadow-lg text-white transition-opacity ${
              !cfg.infinite && current === 0 ? "opacity-30 cursor-not-allowed" : "opacity-100 cursor-pointer"
            }`}
            aria-label="Anterior"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        )}

        <div className="overflow-hidden flex-1">
          <div
            className="flex transition-transform ease-out"
            style={{
              width: `${(total * 100) / cfg.slidesToShow}%`,
              transform: `translateX(-${(current / (total || 1)) * 100}%)`,
              transitionDuration: `${speed}ms`,
            }}
          >
            {items.map((child, i) => (
              <div
                key={i}
                className="px-2"
                style={{
                  width: `${100 / (total || 1)}%`,
                  flex: "0 0 auto",
                  boxSizing: "border-box",
                }}
              >
                {child}
              </div>
            ))}
          </div>
        </div>

        {isMovable && (
          <button
            type="button"
            onClick={next}
            disabled={!cfg.infinite && current === maxIndex}
            className={`shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-brand-primary-dark shadow-lg text-white transition-opacity ${
              !cfg.infinite && current === maxIndex ? "opacity-30 cursor-not-allowed" : "opacity-100 cursor-pointer"
            }`}
            aria-label="Siguiente"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        )}
      </div>

      {isMovable && cfg.dots && pageCount > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              className={`w-2 h-2 rounded-full transition-colors ${
                i === activeDot ? "bg-brand-primary-dark" : "bg-slate-300"
              }`}
              onClick={() => setCurrent(Math.min(i * cfg.slidesToScroll, maxIndex))}
              aria-label={`Ir a la página ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
