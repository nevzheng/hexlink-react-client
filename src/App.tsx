import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import LinkTable from "./components/LinkTable";
import UrlForm from "./components/UrlForm";
import ShortenResult from "./components/ShortenResult";

import { AppContextProvider } from "./context/AppContext";

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
