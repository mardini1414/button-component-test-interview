import { Dispatch, SetStateAction } from "react";

export type BackgroundColor = "blue" | "green" | "yellow" | "red";

export type Size = "small" | "medium" | "large";

export type IconPosition = "right" | "left";

export type TooltipTheme = "light" | "dark";

export type TooltipPosition = "top" | "right" | "bottom" | "left";

export type ButtonProps = {
  label: string;
  backgroundColor?: BackgroundColor;
  size?: Size;
  icon?: React.JSX.Element;
  iconPosition?: IconPosition;
  tooltip?: boolean;
  tooltipTheme?: TooltipTheme;
  tooltipLabel?: string;
  tooltipPosition?: TooltipPosition;
  onClick?: () => void;
};

export type ButtonContexType = {
  label: string;
  setLabel: Dispatch<SetStateAction<string>>;
  backgroundColor: BackgroundColor;
  setBackgroundColor: Dispatch<SetStateAction<BackgroundColor>>;
  size: Size;
  setSize: Dispatch<SetStateAction<Size>>;
  icon: React.JSX.Element | undefined;
  setIcon: Dispatch<SetStateAction<React.JSX.Element | undefined>>;
  iconPosition: IconPosition;
  setIconPosition: Dispatch<SetStateAction<IconPosition>>;
  tooltip: boolean;
  setTooltip: Dispatch<SetStateAction<boolean>>;
  tooltipTheme: TooltipTheme;
  setTooltipTheme: Dispatch<SetStateAction<TooltipTheme>>;
  tooltipLabel: string;
  setTooltipLabel: Dispatch<SetStateAction<string>>;
  tooltipPosition: TooltipPosition;
  setTooltipPosition: Dispatch<SetStateAction<TooltipPosition>>;
};
