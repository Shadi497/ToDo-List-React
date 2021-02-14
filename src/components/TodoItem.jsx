import React from "react";
import moment from "moment";
import { changePriority } from "../store/actions";
import { useDispatch } from "react-redux";
import DeleteButton from "../buttons/DeleteButton";
import DoneOrNot from "../buttons/DoneOrNot";
import UpdateButton from "../buttons/UpdateButton";
import ChangePriority from "../buttons/ChangePriority";

export default function TodoItem(props) {
  const dispatch = useDispatch();

  const task = props.task;

  let a = moment(task.deadlineDate);
  let b = moment();
  let datediff = a.diff(b, "hours");

  const ch = () => {
    if (task.priority === "low") return "middle";
    else if (task.priority === "middle") return "high";
    else if (task.priority === "high") return "low";
  };

  return (
    <div>
      <h2>{task.name}</h2>
      <p onClick={() => dispatch(changePriority({ ...task, priority: ch() }))}>
        {task.priority.toUpperCase()}
      </p>
      <p>{!task.status ? `${datediff} hours left` : task.deadlineDate}</p>
      <DeleteButton taskId={task.id} deleteTask={props.deleteTask} />
      {datediff > 0 ? <DoneOrNot task={task} /> : ""}

      {!task.status && datediff > 0 ? <UpdateButton taskId={task.id} /> : ""}
    </div>
  );
}
