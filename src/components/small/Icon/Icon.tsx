import { forwardRef } from "react";

import buildingBlue from "../../../assets/icons/BuildingBlue.svg";
import buildingWhite from "../../../assets/icons/BuildingWhite.svg";
import checklistBlue from "../../../assets/icons/ChecklistBlue.svg";
import checklistWhite from "../../../assets/icons/ChecklistWhite.svg";
import checkBobleBlue from "../../../assets/icons/CheckBobleBlue.svg";
import checkBobleWhite from "../../../assets/icons/CheckBobleWhite.svg";
import checkBoblesBlue from "../../../assets/icons/CheckBoblesBlue.svg";
import checkBoblesWhite from "../../../assets/icons/CheckBoblesWhite.svg";
import cloudBlue from "../../../assets/icons/CloudBlue.svg";
import cloudWhite from "../../../assets/icons/CloudWhite.svg";
import devicesBlue from "../../../assets/icons/DevicesBlue.svg";
import devicesWhite from "../../../assets/icons/DevicesWhite.svg";
import expandBlue from "../../../assets/icons/ExpandBlue.svg";
import expandWhite from "../../../assets/icons/ExpandWhite.svg";
import flowBlue from "../../../assets/icons/FlowBlue.svg";
import flowWhite from "../../../assets/icons/FlowWhite.svg";
import gearsBlue from "../../../assets/icons/GearsBlue.svg";
import gearsWhite from "../../../assets/icons/GearsWhite.svg";
import graduationCapBlue from "../../../assets/icons/GraduationCapBlue.svg";
import graduationCapWhite from "../../../assets/icons/GraduationCapWhite.svg";
import handshakeBlue from "../../../assets/icons/HandshakeBlue.svg";
import handshakeWhite from "../../../assets/icons/HandshakeWhite.svg";
import learningBlue from "../../../assets/icons/LearningBlue.svg";
import learningWhite from "../../../assets/icons/LearningWhite.svg";
import pencilBlue from "../../../assets/icons/PencilBlue.svg";
import pencilWhite from "../../../assets/icons/PencilWhite.svg";
import secureBlue from "../../../assets/icons/SecureBlue.svg";
import secureWhite from "../../../assets/icons/SecureWhite.svg";
import settingsBlue from "../../../assets/icons/SettingsBlue.svg";
import settingsWhite from "../../../assets/icons/SettingsWhite.svg";
import statisticsBlue from "../../../assets/icons/StatisticsBlue.svg";
import statisticsWhite from "../../../assets/icons/StatisticsWhite.svg";
import stopWatchBlue from "../../../assets/icons/StopWatchBlue.svg";
import stopWatchWhite from "../../../assets/icons/StopWatchWhite.svg";
import supportBlue from "../../../assets/icons/SupportBlue.svg";
import supportWhite from "../../../assets/icons/SupportWhite.svg";
import thinkingBoblesBlue from "../../../assets/icons/ThinkingBoblesBlue.svg";
import thinkingBoblesWhite from "../../../assets/icons/ThinkingBoblesWhite.svg";
import fixToTheRightBlue from "../../../assets/icons/FixToTheRightBlue.svg";
import fixToTheRightWhite from "../../../assets/icons/FixToTheRightWhite.svg";

const iconMap: Record<IconProps["type"], { white: string; blue: string }> = {
   Expand: {
      white: expandWhite,
      blue: expandBlue,
   },
   Settings: {
      white: settingsWhite,
      blue: settingsBlue,
   },
   Secure: {
      white: secureWhite,
      blue: secureBlue,
   },
   ThinkingBobles: {
      white: thinkingBoblesWhite,
      blue: thinkingBoblesBlue,
   },
   Flow: {
      white: flowWhite,
      blue: flowBlue,
   },
   Statistics: {
      white: statisticsWhite,
      blue: statisticsBlue,
   },
   Learning: {
      white: learningWhite,
      blue: learningBlue,
   },
   Devices: {
      white: devicesWhite,
      blue: devicesBlue,
   },
   Building: {
      white: buildingWhite,
      blue: buildingBlue,
   },
   Cloud: {
      white: cloudWhite,
      blue: cloudBlue,
   },
   Pencil: {
      white: pencilWhite,
      blue: pencilBlue,
   },
   GraduationCap: {
      white: graduationCapWhite,
      blue: graduationCapBlue,
   },
   Support: {
      white: supportWhite,
      blue: supportBlue,
   },
   Handshake: {
      white: handshakeWhite,
      blue: handshakeBlue,
   },
   Gears: {
      white: gearsWhite,
      blue: gearsBlue,
   },
   CheckBobles: {
      white: checkBoblesWhite,
      blue: checkBoblesBlue,
   },
   CheckBoble: {
      white: checkBobleWhite,
      blue: checkBobleBlue,
   },
   StopWatch: {
      white: stopWatchWhite,
      blue: stopWatchBlue,
   },
   Checklist: {
      white: checklistWhite,
      blue: checklistBlue,
   },
   FixToTheRight: {
      white: fixToTheRightWhite,
      blue: fixToTheRightBlue,
   },
};

export type IconProps = {
   type:
      | "Expand"
      | "Secure"
      | "Settings"
      | "ThinkingBobles"
      | "Flow"
      | "Statistics"
      | "Learning"
      | "Devices"
      | "Building"
      | "Cloud"
      | "Pencil"
      | "GraduationCap"
      | "Support"
      | "Handshake"
      | "Gears"
      | "CheckBobles"
      | "CheckBoble"
      | "StopWatch"
      | "Checklist"
      | "FixToTheRight";
   alt?: string;
   color?: "white" | "blue";
   width?: number;
};

const Icon = forwardRef<HTMLImageElement, IconProps>(
   ({ type, alt = type, color = "blue", width }, ref) => {
      const src = iconMap[type]?.[color];

      if (!src) {
         console.warn(`Missing icon for type: "${type}" and color: "${color}"`);
         return null;
      }

      return (
         <img ref={ref} src={src} alt={alt} style={{ width: `${width}rem` }} />
      );
   }
);

export { Icon };
