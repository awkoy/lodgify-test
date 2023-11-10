import React from "react";

interface ProgressBarProps {
  progress: number;
}

const TaskManagerProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="relative h-7 bg-emerald-400 bg-opacity-10 rounded-full">
      <div
        className="absolute h-full bg-emerald-400 box-border rounded-full transition-all flex items-center justify-end"
        style={{ width: `${progress}%` }}
      >
        <span className="text-white font-medium pr-4">{progress}%</span>
      </div>
    </div>
  );
};

export default TaskManagerProgressBar;
