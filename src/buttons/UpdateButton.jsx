import { Link } from "react-router-dom";

export default function UpdateButton(props) {
  return (
    <Link to={`${props.taskId}/edit`}>
      <button type="button" class="btn btn-outline-info btn-sm">
        <b>Update</b>
      </button>
    </Link>
  );
}
