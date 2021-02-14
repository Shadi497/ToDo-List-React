import { DeleteButtonStyled } from "../styles";
import { updateTask } from "../store/actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function UpdateButton(props) {
  const dispatch = useDispatch();

  return (
    <Link to={`${props.taskId}/edit`}>
      <DeleteButtonStyled>Update</DeleteButtonStyled>
    </Link>
  );
}
