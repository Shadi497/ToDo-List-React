import { DeleteButtonStyled } from "../styles";
import { deleteTask } from "../store/actions";
import { useDispatch } from "react-redux";

export default function DeleteButton(props) {
  const dispatch = useDispatch();

  return (
    <DeleteButtonStyled onClick={() => dispatch(deleteTask(props.taskId))}>
      Delete
    </DeleteButtonStyled>
  );
}
