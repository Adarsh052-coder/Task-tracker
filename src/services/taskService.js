const STORAGE_KEY = "tasks";

export const getTasks = () =>
  JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

export const saveTasks = (tasks) =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
