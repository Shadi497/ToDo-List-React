import React from "react";
import { changePriority } from "../store/actions";
import { useDispatch } from "react-redux";
import { DeleteButtonStyled } from "../styles";

export default function ChangePriority({ task }) {
  const dispatch = useDispatch();

  const ch = () => {
    if (task.priority === "low") return "middle";
    else if (task.priority === "middle") return "high";
    else if (task.priority === "high") return "low";
  };

  return (
    <DeleteButtonStyled
      onClick={() => dispatch(changePriority({ ...task, priority: ch() }))}
    >
      Change Priority
    </DeleteButtonStyled>
  );
}
