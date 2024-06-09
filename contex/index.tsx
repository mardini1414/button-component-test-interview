"use client";

import {
  BackgroundColor,
  ButtonContexType,
  IconPosition,
  Size,
  TooltipPosition,
  TooltipTheme,
} from "@/types";
import React, { createContext, useState } from "react";

const ButtonContex = createContext<ButtonContexType | undefined>(undefined);

function Provider({ children }: { children: React.ReactNode }) {
  const [label, setLabel] = useState<string>("button");
  const [backgroundColor, setBackgroundColor] =
    useState<BackgroundColor>("blue");
  const [size, setSize] = useState<Size>("medium");
  const [icon, setIcon] = useState<React.JSX.Element | undefined>();
  const [iconPosition, setIconPosition] = useState<IconPosition>("left");
  const [tooltip, setTooltip] = useState<boolean>(false);
  const [tooltipTheme, setTooltipTheme] = useState<TooltipTheme>("light");
  const [tooltipLabel, setTooltipLabel] = useState<string>("tooltip");
  const [tooltipPosition, setTooltipPosition] =
    useState<TooltipPosition>("top");
  return (
    <ButtonContex.Provider
      value={{
        label,
        setLabel,
        backgroundColor,
        setBackgroundColor,
        size,
        setSize,
        icon,
        setIcon,
        iconPosition,
        setIconPosition,
        tooltip,
        setTooltip,
        tooltipTheme,
        setTooltipTheme,
        tooltipLabel,
        setTooltipLabel,
        tooltipPosition,
        setTooltipPosition,
      }}
    >
      {children}
    </ButtonContex.Provider>
  );
}

export { Provider, ButtonContex };
