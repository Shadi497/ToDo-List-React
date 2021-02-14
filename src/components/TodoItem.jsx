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
  let datediffdays = a.diff(b, "days");
  let datediffhours = a.diff(b, "hours");

  const ch = () => {
    if (task.priority === "low") return "middle";
    else if (task.priority === "middle") return "high";
    else if (task.priority === "high") return "low";
  };

  return (
    <div
      class="card border-dark mx-3 mb-3 mt-5 bg-secondary"
      style={{
        width: "25rem",
        outlineWidth: "25px",
      }}
    >
      <div
        class="card-body"
        style={{
          backgroundColor: "#fefafb",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <h2 class="card-title">{task.name}</h2>
          <p style={{ marginLeft: "auto" }}>
            {!task.status && datediffdays === 0
              ? `${datediffhours} hours left`
              : !task.status && datediffdays > 0
              ? `${datediffdays} days left`
              : task.deadlineDate}
          </p>
        </div>
        <p
          class="card-subtitle mb-2  text-right"
          style={{ color: "red" }}
          onClick={() => dispatch(changePriority({ ...task, priority: ch() }))}
        >
          <b>{task.priority.toUpperCase()}</b>
        </p>
        <p></p>
        <DeleteButton taskId={task.id} deleteTask={props.deleteTask} />
        {datediffhours > 0 ? <DoneOrNot task={task} /> : ""}

        {!task.status && datediffhours > 0 ? (
          <UpdateButton taskId={task.id} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
