import "./App.css";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import React, { useState } from "react";
import { Route, Switch } from "react-router";
import data from "./data";

function App() {
  const [tasks, setTasks] = useState();
  const deleteTask = (taskId) => {
    const updatedList = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedList);
  };

  const updateTask = (taskId) => {
    const updatedList = tasks.map((task) => task.id === taskId);
    setTasks(updatedList);
  };

  return (
    <div className="container">
      <Switch>
        <Route exact path={["/new", "/:taskId/edit"]}>
          <TodoInput />
        </Route>
        <Route exact path="/">
          <TodoList deleteTask={deleteTask} updateTask={updateTask} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
