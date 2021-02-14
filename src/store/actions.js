const DELETE_TASK = "DELETE_TASK";
const ADD_TASK = "ADD_TASK";
const FINISHED_TASK = "FINISHED_TASK";

export const deleteTask = (taskID) => {
  return {
    type: DELETE_TASK,
    payload: { taskID },
  };
};

export const addTask = (newTask) => {
  return {
    type: ADD_TASK,
    payload: { newTask }, // {newPerson: newPerson}
  };
};

export const finishedTask = (task) => {
  return {
    type: FINISHED_TASK,
    payload: { task }, // {newPerson: newPerson}
  };
};
