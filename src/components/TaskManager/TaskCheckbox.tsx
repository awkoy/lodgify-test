import React, { FC, memo } from "react";
import CheckIcon from "../icons/CheckIcon";

type TaskCheckboxProps = {
  taskId: string;
  name: string;
  isChecked: boolean;
  onChange: (taskId: string, val: boolean) => void;
};

const TaskCheckbox: FC<TaskCheckboxProps> = ({
  name,
  taskId,
  isChecked,
  onChange,
}) => {
  // it can be more perfect solution with clsx library
  const borderClass = isChecked ? "border-none" : "border";
  const opacityClass = isChecked ? "opacity-100" : "opacity-0";

  return (
    <label className="flex items-center cursor-pointer transition-all hover:bg-slate-100/50 bg-opacity-20 py-3 pl-4">
      <input
        type="checkbox"
        className="hidden"
        checked={isChecked}
        onChange={() => onChange(taskId, !isChecked)}
      />

      <div className={`w-4 h-4 bg-white rounded relative ${borderClass}`}>
        <div
          className={`absolute transition-opacity rounded left-0 right-0 top-0 bottom-0 flex items-center justify-center bg-emerald-400 ${opacityClass}`}
        >
          <CheckIcon className="text-white w-[12px]" />
        </div>
      </div>

      <span className="pl-4 text-sm">{name}</span>
    </label>
  );
};

export default memo(TaskCheckbox);
