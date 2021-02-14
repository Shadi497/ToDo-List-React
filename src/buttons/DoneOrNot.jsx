import { finishedTask } from "../store/actions";
import { useDispatch } from "react-redux";
import { DeleteButtonStyled } from "../styles";

export default function DoneOrNot({ task }) {
  const dispatch = useDispatch();

  return (
    <DeleteButtonStyled
      onClick={() => dispatch(finishedTask({ ...task, status: !task.status }))}
    >
      {task.status ? "Done" : "Not Done"}
    </DeleteButtonStyled>
  );
}
