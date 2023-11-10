import React, { useCallback, useMemo, useState } from "react";
import { TaskListData, TasksMap } from "@/utils/taskMapper";
import { calculateTasksProgress } from "@/utils/calculateTasksProgress";

type TaskGroupItem = {
  groupId: string;
  name: string;
  taskIds: string[];
  isDone: boolean;
};

type UseTaskManagerState = {
  onCheckTask: (taskId: string, value: boolean) => void;
  progress: number;
  tasksDataMap: TasksMap;
  taskGroupList: TaskGroupItem[];
};

type UseTaskManagerParams = {
  taskListData: TaskListData;
};

const useTaskManagerState = ({
  taskListData,
}: UseTaskManagerParams): UseTaskManagerState => {
  const { tasksMap, groupsMap } = taskListData;
  const [tasksDataMap, setTasksMap] = useState(() => tasksMap);
  const [progress, setProgress] = useState(() =>
    calculateTasksProgress(tasksMap)
  );

  const onCheckTask = useCallback((taskId: string, value: boolean) => {
    setTasksMap((tasks) => {
      const newTasksMap = { ...tasks };
      newTasksMap[taskId].checked = value;

      // React batches state updates for better performance
      const newProgress = calculateTasksProgress(newTasksMap);
      setProgress(newProgress);

      return newTasksMap;
    });
  }, []);

  const taskGroupList = useMemo(
    () =>
      Object.keys(groupsMap).map((groupId) => {
        const groupItem = groupsMap[groupId];
        const isDone = groupItem.taskIds.every(
          (taskId) => tasksDataMap[taskId].checked
        );

        return {
          groupId,
          ...groupItem,
          isDone,
        };
      }),
    [tasksDataMap, groupsMap]
  );

  return {
    progress,
    tasksDataMap,
    taskGroupList,
    onCheckTask,
  };
};

export default useTaskManagerState;
