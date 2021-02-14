import React from "react";
import { Icon, ListWrapper, TwoCol } from "../styles";
import TodoItem from "./TodoItem";
import { useState } from "react";
import { useSelector } from "react-redux";
import TodoInput from "./TodoInput";
import { BiAddToQueue } from "react-icons/bi";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { Img } from "../styles";

export default function TodoList(props) {
  const tasks = useSelector((state) => state.tasks);
  const loading = useSelector((state) => state.loading);

  if (loading) return <Loading />;
  const finishedList = [];
  const notFinishedList = [];

  tasks.map((task) => {
    if (task.status === false) {
      notFinishedList.push(task);
    } else if (task.status === true) {
      finishedList.push(task);
    }
  });

  const finishedtasks = finishedList.map((task) => (
    <TodoItem
      key={task.id}
      deleteTask={props.deleteTask}
      updateTask={props.updateTask}
      task={task}
    />
  ));

  const notfinishedtasks = notFinishedList.map((task) => (
    <TodoItem key={task.id} deleteTask={props.deleteTask} task={task} />
  ));
  return (
    <div>
      <TwoCol>
        <Icon>
          <Link to={"/new"}>
            <BiAddToQueue
              style={{
                color: "white",
                marginTop: "95px",
              }}
              size={70}
            />
          </Link>
        </Icon>
        <ListWrapper>
          <h1
            style={{
              color: "white",
              justifyContent: "center",
              display: "flex",
            }}
          >
            Finished Tasks{" "}
          </h1>
          {finishedtasks}
        </ListWrapper>
        <ListWrapper>
          <h1
            style={{
              color: "white",
              justifyContent: "center",
              display: "flex",
            }}
          >
            Unfinished Tasks{" "}
          </h1>
          {notfinishedtasks}
        </ListWrapper>{" "}
      </TwoCol>
    </div>
  );
}
