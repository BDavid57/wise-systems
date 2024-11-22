export type Task = {
  id: string;
  title: string;
  description: string;
  createDate: string;
};

export type CreateTaskDto = {
  title: string;
  description: string;
  createDate: string;
};

export type EditTaskDto = {
  id: string;
  title: string;
  description: string;
};
