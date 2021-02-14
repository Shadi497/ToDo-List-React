import { DeleteButtonStyled } from "../styles";
import { deleteTask } from "../store/actions";
import { useDispatch } from "react-redux";

export default function DeleteButton(props) {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      class="btn btn-outline-danger btn-sm"
      onClick={() => dispatch(deleteTask(props.taskId))}
    >
      <b>Delete</b>
    </button>
  );
}
