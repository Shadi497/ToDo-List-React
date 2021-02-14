import axios from "axios";

export const DELETE_TASK = "DELETE_TASK";
export const ADD_TASK = "ADD_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const FINISHED_TASK = "FINISHED_TASK";
export const CHANGE_PRIORITY = "CHANGE_PRIORITY";
export const FETCH_TASKS = "FETCH_TASKS";

export const fetchTasks = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8000/");
      dispatch({
        type: FETCH_TASKS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteTask = (taskID) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:8000/${taskID}`);
      dispatch({
        type: DELETE_TASK,
        payload: { taskID },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addTask = (newTask) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:8000/", newTask);
      dispatch({
        type: ADD_TASK,
        payload: { newTask: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const finishedTask = (task) => {
  return async (dispatch) => {
    try {
      await axios.put(`http://localhost:8000/${task.id}`, task);
      dispatch({
        type: FINISHED_TASK,
        payload: { task },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const changePriority = (task) => {
  return async (dispatch) => {
    try {
      await axios.put(`http://localhost:8000/${task.id}`, task);
      dispatch({
        type: CHANGE_PRIORITY,
        payload: { task },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateTask = (updatedTask) => {
  return async (dispatch) => {
    try {
      await axios.put(`http://localhost:8000/${updatedTask.id}`, updatedTask);
      dispatch({
        type: UPDATE_TASK,
        payload: { updatedTask },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
