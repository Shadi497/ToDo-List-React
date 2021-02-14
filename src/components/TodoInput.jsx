import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../store/actions";
import { useState } from "react";
import { ListForm, Form, FormButton, H } from "../styles";

export default function TodoInput() {
  const dispatch = useDispatch();

  const [task, setTask] = useState({
    name: "",
    priority: "",
    status: true,
  });

  const handleChange = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTask(task));
  };

  return (
    <ListForm>
      <form style={{ width: "50%" }} onSubmit={handleSubmit}>
        <div class="form-group row">
          <label for="colFormLabel" class="col-sm-2 col-form-label" s>
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

        <div className="form-outline mb-4">
          <select>
            <option value="">Choose your priority</option>
            <option value="low">Low</option>
            <option value="middle">Middle</option>
            <option value="high">High</option>
          </select>

          {/* <input
            type="text"
            className="form-control"
            name="priority"
            value={task.priority}
            onChange={handleChange}
            type="list"
          />
          <label className="form-label" for="form1Example1">
            Task Priority
          </label> */}
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Add
        </button>
      </form>
    </ListForm>
  );
}
