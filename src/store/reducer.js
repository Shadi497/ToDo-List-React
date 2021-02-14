const initialState = {
  tasks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.taskID),
      };
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload.newTask],
      };
    case "FINISHED_TASK":

    default:
      return state;
  }
};

export default reducer;
