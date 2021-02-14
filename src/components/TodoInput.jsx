import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask } from "../store/actions";
import { useState } from "react";
import { ListForm, Form, FormButton, H } from "../styles";
import { useHistory, useParams } from "react-router";

export default function TodoInput() {
  const { taskId } = useParams();
  const dispatch = useDispatch();

  const foundTask = useSelector((state) =>
    state.tasks.find((task) => task.id === +taskId)
  );

  const [task, setTask] = useState(
    foundTask
      ? foundTask
      : {
          name: "",
          priority: "",
          deadlineDate: "",
          status: false,
        }
  );
  const history = useHistory();

  const handleChange = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (foundTask) dispatch(updateTask(task));
    else dispatch(addTask(task));
    history.push("/");
  };

  return (
    <ListForm>
      <form style={{ width: "50%" }} onSubmit={handleSubmit}>
        <h1 style={{ marginBottom: "55px" }}>
          {foundTask ? "Update " : "New "}Task
        </h1>
        <div class="form-group row">
          <label className="form-label" for="form1Example1">
            Task Name
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              className="form-control"
              name="name"
              value={task.name}
              onChange={handleChange}
              type="text"
            />
          </div>
        </div>

        <div class="form-group row">
          <label className="form-label" for="form1Example1">
            Task Date
          </label>
          <div class="col-sm-10" style={{ marginLeft: "10px" }}>
            <input
              type="date"
              className="form-control"
              name="deadlineDate"
              value={task.deadlineDate}
              onChange={handleChange}
            />
          </div>
        </div>

        <div class="form-group row">
          <label className="form-label" for="form1Example1">
            Task Priority
          </label>
          <div className="col-sm-10" style={{}}>
            <select name="priority" onChange={handleChange}>
              <option value="">Choose your priority</option>
              <option value="low">Low</option>
              <option value="middle">Middle</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Add
        </button>
      </form>
    </ListForm>
  );
}
