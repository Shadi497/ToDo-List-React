import { LoadingWrapper, Title } from "../styles";
import PropagateLoader from "react-spinners/PropagateLoader";

export default function Loading() {
  return (
    <LoadingWrapper>
      <Title style={{ marginRight: "2%" }}>
        OOPS! There is no tasks here ...
      </Title>
      <PropagateLoader color="blue" size={25} />
    </LoadingWrapper>
  );
}
