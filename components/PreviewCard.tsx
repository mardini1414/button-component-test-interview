"use client";

import React, { useContext } from "react";
import Button from "@/components/Button";
import { ButtonContex } from "@/contex";
import { ButtonContexType } from "@/types";

function PreviewCard(): React.ReactNode {
  const {
    label,
    backgroundColor,
    size,
    icon,
    iconPosition,
    tooltip,
    tooltipTheme,
    tooltipLabel,
    tooltipPosition,
  } = useContext(ButtonContex) as ButtonContexType;
  return (
    <div className="max-h-full min-h-[480px] w-[480px] bg-white rounded border grid place-content-center">
      <Button
        label={label}
        backgroundColor={backgroundColor}
        size={size}
        icon={icon}
        iconPosition={iconPosition}
        tooltip={tooltip}
        tooltipTheme={tooltipTheme}
        tooltipLabel={tooltipLabel}
        tooltipPosition={tooltipPosition}
      />
    </div>
  );
}

export default PreviewCard;
