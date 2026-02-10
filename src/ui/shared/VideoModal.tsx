"use client";

import { useModalStore } from "@/lib/store/modalStore";
import { AssetIcon } from "@/lib/utils/assets/icon";
import { useState } from "react";
import Button from "./Button";

type VideoModalProps = {
  videoSrc: string;
  title: string;
  description: string;
};

export const VideoModal: React.FC<VideoModalProps> = ({
  videoSrc,
  title,
  description,
}) => {
  const { hideModal } = useModalStore();
  const [isLoading, setIsLoading] = useState(true);

  const onRedirectHubspot = () => {
    window.open("https://meetings.hubspot.com/francisco472", "_blank");
  };

  return (
    <div className="w-full h-full flex flex-col gap-8 p-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="text-brand-primary-dark text-xl md:text-3xl font-bold ">
            {title}
          </p>
          <AssetIcon.plus
            className="rotate-45 cursor-pointer mt-2"
            width={20}
            height={20}
            fill="#78829D"
            onClick={hideModal}
          />
        </div>
        <p className="text-[#4B5675] text-md leading-[16px]">{description}</p>
      </div>
      <div className="flex-1 rounded-xl overflow-hidden shadow-lg relative bg-white min-h-[315px] flex items-center justify-center">
        {isLoading && (
          <div className="absolute inset-0 bg-white z-10 flex items-center justify-center">
            <div
              className="relative w-12 h-12 rounded-full animate-spin"
              style={{
                background: `
                linear-gradient(0deg, rgba(30, 64, 175, 0.5) 30%, transparent 0 70%, rgba(30, 64, 175, 1) 0) 50%/8% 100%,
                linear-gradient(90deg, rgba(30, 64, 175, 0.25) 30%, transparent 0 70%, rgba(30, 64, 175, 0.75) 0) 50%/100% 8%
              `,
                backgroundRepeat: "no-repeat",
                animationDuration: "1s",
                animationTimingFunction: "steps(12)",
              }}
            >
              <div
                className="absolute inset-0 rounded-full opacity-[0.915]"
                style={{
                  background: "inherit",
                  transform: "rotate(30deg)",
                }}
              />
              <div
                className="absolute inset-0 rounded-full opacity-[0.83]"
                style={{
                  background: "inherit",
                  transform: "rotate(60deg)",
                }}
              />
            </div>
          </div>
        )}
        <style jsx>{`
          video::-webkit-media-controls-panel {
            background: linear-gradient(
              to top,
              rgba(30, 44, 80, 0.9) 0%,
              rgba(30, 44, 80, 0.35) 10%,
              transparent 18%
            ) !important;
          }
        `}</style>

        <video
          className="max-w-full max-h-full w-auto h-auto"
          style={{
            backgroundColor: "transparent",
            opacity: isLoading ? 0 : 1,
            transition: "opacity 0.3s ease-in-out",
          }}
          autoPlay
          loop
          controls
          onLoadedData={() => setIsLoading(false)}
          onCanPlay={() => setIsLoading(false)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      <div className="flex items-center justify-between gap-2">
        <p className="text-[#4B5675] text-md leading-[16px]">
          <span className="font-bold">Sena</span>, el arte de cobrar bien
        </p>
        <Button text="Agenda tu demo" onClick={onRedirectHubspot} />
      </div>
    </div>
  );
};
