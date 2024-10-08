const baseUrl = "https://66d6e168006bfbe2e64ef24c.mockapi.io/api/v1/tasks";

export const createTask = (taskData) =>
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(taskData),
  });

export const updateTask = (taskId, taskData) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(taskData),
  });

export const deleteTask = (taskId) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: "DELETE",
  });

export const getTasksList = () =>
  fetch(baseUrl).then((resoponse) => resoponse.json());
