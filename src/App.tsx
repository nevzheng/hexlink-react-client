import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import LinkTable from "./components/LinkTable";
import UrlForm from "./components/UrlForm";
import ShortenResult from "./components/ShortenResult";

import { AppContextProvider } from "./context/AppContext";
import { OpenAPI } from "./services/hexlink";

// Overwrite the API url for testing
// OpenAPI.BASE = "http://localhost:4010";
// Appease typescript
const backend_url = process.env.REACT_APP_API_URL;
if (backend_url) {
  OpenAPI.BASE = backend_url;
}

export const App: React.FC = () => {
  return (
    <AppContextProvider>
      <Container className="p-3">
        <Row>
          <Col>
            <UrlForm />
          </Col>
          <Col>
            <ShortenResult />
          </Col>
        </Row>
        <hr />
        <LinkTable />
        <hr />
      </Container>
    </AppContextProvider>
  );
};

export default App;
