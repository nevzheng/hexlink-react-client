import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useAppContext } from "../context/AppContext";
import { Redirect, Service } from "../services/hexlink";
import { ActionType, Action } from "../types/types";

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

    await Service.createRedirect(url)
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
