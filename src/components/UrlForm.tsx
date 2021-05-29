import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { PostShortenUrl } from "../api/request";
import { useAppContext } from "../context/AppContext";
import { ActionType, Redirect } from "../types/types";

const UrlForm: React.FC = () => {
  const { dispatch } = useAppContext();

  const handleSubmit = async (
    e: React.FormEvent<EventTarget>
  ): Promise<void> => {
    e.preventDefault();

    const target = e.target as HTMLInputElement;
    console.log(
      `UrlForm: Submitting Form with data: ${JSON.stringify(target.value)}`
    );

    // MAKE API Request
    await PostShortenUrl(target.value)
      .then((response) => {
        if (response.status !== 201) throw new Error();
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return JSON.parse(json) as Redirect;
      })
      .then((r: Redirect) => {
        dispatch({ type: ActionType.SetLastRedirect, payload: r });
        return r;
      })
      .then((r: Redirect) => {
        dispatch({ type: ActionType.AppendToRedirectArray, payload: r });
        return r;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formURLInput">
          <Form.Label>URL to Shorten</Form.Label>
          <Form.Control type="text" placeholder="http://shorten.me" />
        </Form.Group>
        <Button className="mb-3" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default UrlForm;
