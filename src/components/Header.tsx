import { Navbar, Nav } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";

export const Header: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>Hexlink</Navbar.Brand>
      </LinkContainer>
      <Nav className="mr-auto">
        <LinkContainer to="/">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/about">
          <Nav.Link>About</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};

export default Header;
