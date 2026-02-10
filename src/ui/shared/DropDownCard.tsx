"use client";

import clsx from "clsx";
import { FC, Fragment, ReactNode, useCallback, useEffect, useRef } from "react";

type Props = {
  contentHead: ReactNode;
  contentDetail: ReactNode;
  isOpen: boolean;
  withoutTransition?: boolean;
  customClassName?: string;
};

export const DropDownCard: FC<Props> = ({
  contentHead,
  contentDetail,
  isOpen,
  withoutTransition = false,
  customClassName,
}) => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const updateHeight = useCallback(() => {
    if (withoutTransition) return;
    if (contentRef.current && bodyRef.current) {
      const height = isOpen ? `${contentRef.current.scrollHeight}px` : "0";
      bodyRef.current.style.height = height;
    }
  }, [isOpen, withoutTransition]);

  useEffect(() => {
    updateHeight();
  }, [updateHeight]);

  useEffect(() => {
    if (withoutTransition || !contentRef.current) return;

    const el = contentRef.current;
    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });

    resizeObserver.observe(el);

    return () => {
      resizeObserver.disconnect();
    };
  }, [updateHeight, withoutTransition]);

  useEffect(() => {
    if (!withoutTransition) return;
    if (bodyRef.current) {
      bodyRef.current.style.height = "";
    }
  }, [withoutTransition]);

  return (
    <Fragment>
      <div
        className={clsx(
          "flex flex-col overflow-hidden border rounded-[12px]",
          customClassName,
        )}
      >
        {contentHead}
        <div
          ref={bodyRef}
          className={clsx(
            "overflow-hidden",
            withoutTransition
              ? `transition-all duration-300 ease-in-out opacity-0 h-0 invisible ${isOpen ? "opacity-100 h-auto visible" : ""}`
              : `opacity-0 pointer-events-none transition-[height,opacity] duration-300 ease-in-out ${isOpen ? "opacity-100 pointer-events-auto" : ""}`,
          )}
        >
          <div ref={contentRef} className="flex flex-col gap-2">
            {contentDetail}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
