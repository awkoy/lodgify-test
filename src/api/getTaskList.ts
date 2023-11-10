export type TaskItem = {
  description: string;
  value: number;
  checked: boolean;
};

export type TaskGroup = {
  name: string;
  tasks: TaskItem[];
};

type FetchTaskDataResponse = TaskGroup[];

// here should be a common validation for all requests with try catch
export const fetchTaskList = async () => {
  const API_URL = process.env.API_URL as string;
  const res = await fetch(API_URL);

  if (!res.ok) {
    console.error("Error occurred when fetching tasks");
    return [] as FetchTaskDataResponse;
  }

  return (await res.json()) as FetchTaskDataResponse;
};
