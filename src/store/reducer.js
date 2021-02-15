const initialState = {
  tasks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TASKS":
      return {
        ...state,
        tasks: action.payload,
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.taskID),
      };
    case "ADD_TASK":
      state.tasks.length === 0
        ? (action.payload.newTask.id = 1)
        : (action.payload.newTask.id =
            state.tasks[state.tasks.length - 1].id + 1);
      return {
        ...state,
        tasks: [...state.tasks, action.payload.newTask],
      };

    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.updatedTask.id
            ? action.payload.updatedTask
            : task
        ),
      };
    case "FINISHED_TASK":
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.task.id
      );
      const newState = [...state.tasks];
      newState[index] = action.payload.task;
      return {
        ...state,
        tasks: [...newState],
      };

    case "CHANGE_PRIORITY":
      const indext = state.tasks.findIndex(
        (task) => task.id === action.payload.task.id
      );
      const newStatet = [...state.tasks];
      newStatet[indext] = action.payload.task;
      return {
        ...state,
        tasks: [...newStatet],
      };
    default:
      return state;
  }
};

export default reducer;
