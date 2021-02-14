import React from "react";
import { ListWrapper } from "../styles";
import TodoItem from "./TodoItem";
import { useState } from "react";
import { useSelector } from "react-redux";
import TodoInput from "./TodoInput";

export default function TodoList(props) {
  const [done, setDone] = useState("");
  const [notdone, setNotdone] = useState("");

  const tasks = useSelector((state) => state.tasks);

  const finishedList = [];
  const notFinishedList = [];

  //   tasks.map((task) => {
  //     if (task.status === true) {
  //       notFinishedList.push(task);
  //     } else if (task.status === false) {
  //       finishedList.push(task);
  //     }
  //   });

  const taskslist = tasks.map((task) => (
    <TodoItem key={task.id} deleteTask={props.deleteTask} task={task} />
  ));

  return (
    <div>
      <TodoInput />
      <ListWrapper>{taskslist}</ListWrapper>
    </div>
  );
}
