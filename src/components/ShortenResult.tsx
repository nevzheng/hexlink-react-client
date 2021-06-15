import Card from "react-bootstrap/Card";
import { useAppContext } from "../context/AppContext";

const ShortenResult: React.FC = () => {
  const { state } = useAppContext();
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>Result</Card.Title>
          <Card.Text>
            {state.lastRedirect
              ? state.lastRedirect.url + "=>" + state.lastRedirect.redirectCode
              : "Please Shorten a URL"}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ShortenResult;
