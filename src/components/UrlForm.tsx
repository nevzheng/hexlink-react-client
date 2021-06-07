import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { PostShortenUrl } from "../api/request";
import { useAppContext } from "../context/AppContext";
import { ActionType, Redirect, Action } from "../types/types";

const UrlForm: React.FC = () => {
  const { dispatch } = useAppContext();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const url = formData.get("url") as string;
    console.log(`URL Entered: ${url}`);

    if (url === null) {
      return;
    }
    // MAKE API Request
    await PostShortenUrl(url)
      .then((response) => {
        if (response.status !== 201) throw new Error();
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return {
          url: json.url,
          code: json.code,
          created: json.created,
        } as Redirect;
      })
      .then((r: Redirect) => {
        dispatch({ type: ActionType.SetLastRedirect, payload: r } as Action);
        return r;
      })
      .then((r: Redirect) => {
        dispatch({
          type: ActionType.AppendToRedirectArray,
          payload: r,
        } as Action);
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
          <Form.Control
            type="text"
            name="url"
            placeholder="http://shorten.me"
          />
        </Form.Group>
        <Button className="mb-3" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default UrlForm;
