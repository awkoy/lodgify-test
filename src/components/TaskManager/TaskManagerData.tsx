import React from "react";
import { fetchTaskList } from "@/api/getTaskList";
import { normilizeTaskList } from "@/utils/taskMapper";
import TaskManager from "./TaskManager";

const TaskManagerData = async () => {
  const taskListResponse = await fetchTaskList();
  const taskListData = normilizeTaskList(taskListResponse);

  return <TaskManager taskListData={taskListData} />;
};

export default TaskManagerData;
