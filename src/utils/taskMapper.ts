import { TaskGroup, TaskItem } from "@/api/getTaskList";

export type GroupTaskMap = Record<
  string,
  {
    name: string;
    taskIds: string[];
  }
>;

export type TasksMap = Record<
  string,
  TaskItem & {
    groupId: string;
  }
>;

// it's more efficient way to put the data in store,
// in case we have a lot of data and deeper arrays
export const normilizeTaskList = (list: TaskGroup[]) => {
  const GROUP_ID_PREFIX = "GROUP_ID";

  const groupsMap: GroupTaskMap = {};
  const tasksMap: TasksMap = {};

  list.forEach((taskGroup, idx) => {
    const groupId = `${GROUP_ID_PREFIX}_${idx}`;

    const taskIds = taskGroup.tasks.map((task, taskIdx) => {
      const taskId = `${groupId}_TASK_${taskIdx}`;

      tasksMap[taskId] = {
        ...task,
        groupId,
      };

      return taskId;
    });

    groupsMap[groupId] = {
      name: taskGroup.name,
      taskIds,
    };
  });

  return {
    groupsMap,
    tasksMap,
  };
};

export type TaskListData = ReturnType<typeof normilizeTaskList>;
