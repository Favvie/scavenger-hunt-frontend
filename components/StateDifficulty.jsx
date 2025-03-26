import { cn, titleCase } from "@/lib/utils";
import { useMemo } from "react";

const getStatusColors = (status) => {
  switch (status) {
    case "active":
      return {
        bgColor: "#637C78",
        iconColor: "#439F6E",
        borderColor: "",
      };
    case "upcoming":
      return {
        bgColor: "#837A6F",
        iconColor: "#FFB82E",
        borderColor: "#FFB82E",
      };
    default:
      return { bgColor: "", iconColor: "", borderColor: "" };
  }
};

const getLevelColors = (level) => {
  switch (level) {
    case "easy":
      return {
        textColor: "#A3D9A5",
      };
    case "medium":
      return {
        textColor: "#FFD580",
      };
    case "hard":
      return {
        textColor: "#F93232",
      };
    default:
      return { textColor: "" };
  }
};

const StateDifficulty = ({ status, level }) => {
  const statusColors = useMemo(
    () => getStatusColors(status.toLowerCase()),
    [status]
  );

  const levelColors = useMemo(
    () => getLevelColors(level.toLowerCase()),
    [level]
  );

  return (
    <div className="flex items-center justify-start gap-5">
      <p
        className={cn(
          `rounded-lg text-texts-important py-1 px-4 font-bold text-xs font-orbitron`,
          `border border-[${statusColors.borderColor}]`
        )}
        style={{ backgroundColor: statusColors.bgColor }}
      >
        <span
          className={cn(
            `inline-block mr-2 w-2 h-2 rounded-full`,
            `bg-[${statusColors.iconColor}]`
          )}
        ></span>
        {titleCase(status)}
      </p>
      <p
        className={cn(
          `rounded-lg py-1 px-8 bg-[#83717A] font-bold text-xs font-orbitron`,
          `text-[${levelColors.textColor}]`
        )}
      >
        {titleCase(level)}
      </p>
    </div>
  );
};

export default StateDifficulty;
