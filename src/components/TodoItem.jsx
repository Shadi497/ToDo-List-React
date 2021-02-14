import React from "react";
import { useDispatch } from "react-redux";
import { finishedTask, deleteTask } from "../store/actions";
import { useState } from "react";
import DeleteButton from "../buttons/DeleteButton";

export default function TodoItem(props) {
  const task = props.task;

  //   const dispatch = useDispatch();

  return (
    <div>
      <h2>{task.name}</h2>
      <DeleteButton taskId={task.id} deleteTask={props.deleteTask} />
    </div>
  );
}
