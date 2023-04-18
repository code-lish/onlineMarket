import {
  Container,
  Navbar,
  Nav,
  Form,
  Button,
  Offcanvas,
} from "react-bootstrap";
import {
  FaHome,
  FaUserAlt,
  FaSignInAlt,
  FaCartArrowDown,
} from "react-icons/fa";

const TopNavbar = () => {
  return (
    <>
      <Navbar bg="light" expand="sm" className="mb-0" sticky="top">
        <Container>
          <Navbar.Brand href="#">Logo Here</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-sm"
            aria-labelledby="offcnvasNavbarLabel-expand-sm"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcnvasNavbarLabel-expand-sm">
                Logo
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Form className="d-flex me-5">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              <Nav className="flex-grow-1 pe-3 ms-4">
                <Nav.Link className="d-flex align-items-center">
                  <FaHome className="me-2" />
                  Home
                </Nav.Link>
                <Nav.Link className="d-flex align-items-center">
                  <FaUserAlt className="me-2" />
                  About
                </Nav.Link>

                <Nav.Link className="d-flex align-items-center">
                  <FaSignInAlt className="ms-md-5 me-2" />
                  About
                </Nav.Link>
                <Nav.Link className="d-flex align-items-center">
                  <FaCartArrowDown className="me-2" />
                  Cart(0)
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNavbar;
