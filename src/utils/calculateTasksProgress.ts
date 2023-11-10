import { TasksMap } from "./taskMapper";

export const calculateTasksProgress = (tasksMap: TasksMap): number => {
  let totalValues = 0;
  let totalValuesChecked = 0;

  Object.values(tasksMap).forEach((task) => {
    totalValues = totalValues + task.value;

    if (task.checked) {
      totalValuesChecked = totalValuesChecked + task.value;
    }
  });

  return Math.floor((totalValuesChecked / totalValues) * 100);
};
