import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { BackgroundColor, ButtonProps, Size, TooltipTheme } from "@/types";

function Button(props: ButtonProps): React.ReactNode {
  const {
    label,
    backgroundColor = "blue",
    size = "medium",
    icon,
    iconPosition = "left",
    tooltip = false,
    tooltipTheme = "dark",
    tooltipLabel,
    tooltipPosition = "top",
    onClick = () => {},
  } = props;

  function getBackgroundClass(backgroundColor: BackgroundColor): string {
    switch (backgroundColor) {
      case "blue":
        return "bg-blue-500";
      case "green":
        return "bg-green-500";
      case "yellow":
        return "bg-yellow-500";
      case "red":
        return "bg-red-500";
      default:
        return "";
    }
  }

  function getSizeClasses(size: Size): string {
    switch (size) {
      case "small":
        return "px-3 py-1 text-base font-normal";
      case "medium":
        return "px-4 py-1.5 text-lg font-normal";
      case "large":
        return "px-6 py-2 text-lg font-normal";
      default:
        return "";
    }
  }

  function getThemeClasses(theme: TooltipTheme): string {
    switch (theme) {
      case "dark":
        return "bg-black/75 text-white";
      case "light":
        return "bg-white/75 text-black/90";
      default:
        return "";
    }
  }

  const button = (
    <button
      className={`${getSizeClasses(size)} ${getBackgroundClass(
        backgroundColor
      )} rounded flex items-center gap-2 text-white`}
      onClick={onClick}
    >
      {icon && iconPosition === "left" && <span>{icon}</span>}
      <span className="block mb-1">{label}</span>
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </button>
  );

  if (!tooltip) return button;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild={true}>{button}</TooltipTrigger>
        <TooltipContent
          className={getThemeClasses(tooltipTheme)}
          side={tooltipPosition}
        >
          {tooltipLabel}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default Button;
