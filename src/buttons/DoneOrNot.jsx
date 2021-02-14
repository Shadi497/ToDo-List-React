import { finishedTask } from "../store/actions";
import { useDispatch } from "react-redux";
import { DeleteButtonStyled } from "../styles";

export default function DoneOrNot({ task }) {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      class="btn btn-outline-success btn-sm mx-2"
      onClick={() => dispatch(finishedTask({ ...task, status: !task.status }))}
    >
      <b>{!task.status ? "Done" : "Not Done"}</b>
    </button>
  );
}
