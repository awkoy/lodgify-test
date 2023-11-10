"use client";

import React, { FC } from "react";
import TaskManagerProgressBar from "./TaskManagerProgressBar";
import { TaskListData } from "@/utils/taskMapper";
import useTaskManagerState from "@/hooks/useTaskManagerState";
import Accordion from "../Accordion/Accordion";
import AccordionItem from "../Accordion/AccordionItem";
import TaskAccordionTitle from "./TaskAccordionTitle";
import TaskCheckbox from "./TaskCheckbox";

type TaskManagerProps = {
  taskListData: TaskListData;
};
const TaskManager: FC<TaskManagerProps> = ({ taskListData }) => {
  const { progress, taskGroupList, tasksDataMap, onCheckTask } =
    useTaskManagerState({
      taskListData,
    });

  return (
    <div className="max-w-screen-lg mx-auto border border-gray-300 bg-white rounded-lg px-4 pb-4 pt-12">
      <div className="px-6 pb-6">
        <h3 className="font-semibold text-2xl mb-4">Lodgify Grouped Tasks</h3>
        <TaskManagerProgressBar progress={progress} />
      </div>

      <Accordion>
        {taskGroupList.map((groupItem, groupIdx) => (
          <AccordionItem
            key={groupItem.groupId}
            title={
              <TaskAccordionTitle
                title={groupItem.name}
                isActive={groupItem.isDone}
              />
            }
            isOpened={groupIdx === 0}
          >
            {groupItem.taskIds.map((taskId) => {
              const taskItem = tasksDataMap[taskId];

              return (
                <TaskCheckbox
                  key={taskId}
                  taskId={taskId}
                  name={taskItem.description}
                  isChecked={taskItem.checked}
                  onChange={onCheckTask}
                />
              );
            })}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default TaskManager;
