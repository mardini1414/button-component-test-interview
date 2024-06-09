"use client";

import React, { useContext, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Mail, Phone, Settings, User } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { ButtonContex } from "@/contex";
import {
  BackgroundColor,
  ButtonContexType,
  IconPosition,
  Size,
  TooltipPosition,
  TooltipTheme,
} from "@/types";
import Button from "./Button";

function Editor(): React.ReactNode {
  const [selectedIcon, setSelectedIcon] = useState<string>();
  const {
    label,
    setLabel,
    backgroundColor,
    setBackgroundColor,
    size,
    setSize,
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
  } = useContext(ButtonContex) as ButtonContexType;

  function getActiveIconClass(icon: string): string {
    if (selectedIcon === icon) return "bg-blue-500/20";
    return "";
  }

  return (
    <div className="w-[480px]">
      <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
        <Label className="mb-1" htmlFor="button-label">
          Button label
        </Label>
        <Input
          id="button-label"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <div className="mb-2">
          <Label>Background color</Label>
        </div>
        <RadioGroup
          className="flex"
          defaultValue={backgroundColor}
          onValueChange={(v) => setBackgroundColor(v as BackgroundColor)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="blue" id="blue" />
            <Label className="text-xs font-normal" htmlFor="blue">
              Blue
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="green" id="green" />
            <Label className="text-xs font-normal" htmlFor="green">
              Green
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yellow" id="yellow" />
            <Label className="text-xs font-normal" htmlFor="yellow">
              Yellow
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="red" id="red" />
            <Label className="text-xs font-normal" htmlFor="red">
              Red
            </Label>
          </div>
        </RadioGroup>
      </div>
      <div className="mb-5">
        <div className="mb-2">
          <Label>Size</Label>
        </div>
        <RadioGroup
          className="flex"
          defaultValue={size}
          onValueChange={(v) => setSize(v as Size)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="small" id="small" />
            <Label className="text-xs font-normal" htmlFor="small">
              Small
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="medium" id="medium" />
            <Label className="text-xs font-normal" htmlFor="medium">
              Medium
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="large" id="large" />
            <Label className="text-xs font-normal" htmlFor="large">
              Large
            </Label>
          </div>
        </RadioGroup>
      </div>
      <div className="mb-5">
        <div className="mb-2">
          <Label>Icon</Label>
        </div>
        <div className="flex items-center gap-6">
          <div
            className={`cursor-pointer p-2 rounded-full ${getActiveIconClass(
              "Phone"
            )}`}
            onClick={() => {
              setIcon(<Phone size={20} />);
              setSelectedIcon("Phone");
            }}
          >
            <Phone />
          </div>
          <div
            className={`cursor-pointer p-2 rounded-full ${getActiveIconClass(
              "Mail"
            )}`}
            onClick={() => {
              setIcon(<Mail size={20} />);
              setSelectedIcon("Mail");
            }}
          >
            <Mail />
          </div>
          <div
            className={`cursor-pointer p-2 rounded-full ${getActiveIconClass(
              "Settings"
            )}`}
            onClick={() => {
              setIcon(<Settings size={20} />);
              setSelectedIcon("Settings");
            }}
          >
            <Settings />
          </div>
          <div
            className={`cursor-pointer p-2 rounded-full ${getActiveIconClass(
              "User"
            )}`}
            onClick={() => {
              setIcon(<User size={20} />);
              setSelectedIcon("User");
            }}
          >
            <User />
          </div>
          <Button
            label="remove"
            size="small"
            backgroundColor="red"
            onClick={() => setIcon(undefined)}
          />
        </div>
      </div>
      <div className="mb-5">
        <div className="mb-2">
          <Label>Icon position</Label>
        </div>
        <RadioGroup
          className="flex"
          defaultValue={iconPosition}
          onValueChange={(v) => setIconPosition(v as IconPosition)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="left" id="icon-left" />
            <Label className="text-xs font-normal" htmlFor="icon-left">
              Left
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="right" id="icon-right" />
            <Label className="text-xs font-normal" htmlFor="icon-right">
              Right
            </Label>
          </div>
        </RadioGroup>
      </div>
      <div className="mb-5 flex gap-8 items-center">
        <div className="flex flex-col">
          <div className="mb-2">
            <Label>Tooltip</Label>
          </div>
          <Checkbox
            defaultChecked={tooltip}
            onCheckedChange={(v) => setTooltip(v as boolean)}
          />
        </div>
        <div>
          <div className="mb-2">
            <Label>Tooltip theme</Label>
          </div>
          <RadioGroup
            className="flex"
            defaultValue={tooltipTheme}
            onValueChange={(v) => setTooltipTheme(v as TooltipTheme)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="light" id="tooltip-light" />
              <Label className="text-xs font-normal" htmlFor="tooltip-light">
                Light
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="dark" id="tooltip-dark" />
              <Label className="text-xs font-normal" htmlFor="tooltip-dark">
                Dark
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
        <Label className="mb-1" htmlFor="tooltip-label">
          Tooltip label
        </Label>
        <Input
          id="tooltip-label"
          value={tooltipLabel}
          onChange={(e) => setTooltipLabel(e.target.value)}
        />
      </div>
      <div>
        <div className="mb-2">
          <Label>Tooltip position</Label>
        </div>
        <RadioGroup
          className="flex"
          defaultValue={tooltipPosition}
          onValueChange={(v) => setTooltipPosition(v as TooltipPosition)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="top" id="tooltip-top" />
            <Label className="text-xs font-normal" htmlFor="tooltip-top">
              Top
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="bottom" id="tooltip-bottom" />
            <Label className="text-xs font-normal" htmlFor="tooltip-bottom">
              Bottom
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="left" id="tooltip-left" />
            <Label className="text-xs font-normal" htmlFor="tooltip-left">
              Left
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="right" id="tooltip-right" />
            <Label className="text-xs font-normal" htmlFor="tooltip-right">
              Right
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

export default Editor;
