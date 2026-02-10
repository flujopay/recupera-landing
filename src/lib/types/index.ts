import { ReactNode } from "react";

export type TCountry = {
  id: number;
  country: string;
  country_code: string;
  icon: string;
};

export type TModal = {
  content: ReactNode;
  modalClassName?: string;
  contentClassName?: string;
  contentTitleClassName?: string;
  onClosedCallback?: () => void;
  nonBlocking?: boolean;
  position?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  width?: string;
  height?: string;
  showCloseButton?: boolean;
  title?: string | React.JSX.Element;
  showHeader?: boolean;
  slideFrom?: "right" | "left" | "top" | "bottom";
  closeOnOutsideClick?: boolean;
  modalId?: string;
  modalIdentifier?: string;
  parentModalIdentifier?: string;
  elementId?: number | string;
};

export type TToastProps = {
  message: string;
  subMessage?: string;
  iconType: "success" | "error" | "warning";
  actionUrl?: { label: string; url?: string; handleButton?: () => void };
  width?: string;
};
