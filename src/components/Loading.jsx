import { LoadingWrapper, Title, Icon } from "../styles";
import PropagateLoader from "react-spinners/PropagateLoader";
import { BiAddToQueue } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Loading() {
  return (
    <LoadingWrapper>
      <Title
        style={{ marginRight: "2%", marginBottom: "35px", color: "white" }}
      >
        OOPS! There are no tasks here ...
      </Title>
      <PropagateLoader color="white" size={20} />
      <Icon>
        <Link to={"/new"}>
          <BiAddToQueue
            style={{
              color: "white",
              marginTop: "95px",
            }}
            size={70}
          />
        </Link>
      </Icon>
    </LoadingWrapper>
  );
}
