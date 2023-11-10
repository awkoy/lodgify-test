import React, { FC, memo } from "react";
import TaskIcon from "../icons/TaskIcon";

type TaskAccordionTitleProps = {
  title: string;
  isActive: boolean;
};

const TaskAccordionTitle: FC<TaskAccordionTitleProps> = ({
  title,
  isActive,
}) => {
  // it can be more perfect solution with clsx library
  const textColor = isActive ? "text-green-500" : "text-black";
  const iconColor = isActive ? "text-green-500" : "text-gray-400";

  return (
    <div className={`flex items-center cursor-pointer p-2 pl-4 ${textColor}`}>
      <TaskIcon className={`mr-3 w-5 ${iconColor}`} />
      <span className="text-base font-light">{title}</span>
    </div>
  );
};

export default memo(TaskAccordionTitle);
