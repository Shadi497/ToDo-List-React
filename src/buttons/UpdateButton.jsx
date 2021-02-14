import { DeleteButtonStyled } from "../styles";
import { updateTask } from "../store/actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function UpdateButton(props) {
  const dispatch = useDispatch();

  return (
    <Link to={`${props.taskId}/edit`}>
      <button type="button" class="btn btn-outline-info btn-sm">
        <b>Update</b>
      </button>
    </Link>
  );
}
