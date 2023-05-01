import {
  Form,
  Button,
  Row,
  Col,
  Container,
  FloatingLabel,
} from "react-bootstrap";

const Login = () => {
  return (
    <Container style={{}}>
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div
          className="rounded shadow"
          style={{ width: "50%", backgroundColor: "#f5f4f0" }}
        >
          <h1 className="text-center py-2">login</h1>
          <Form className="p-3 ">
            <FloatingLabel
              controlId="floatingTextarea"
              label="Email"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="Email" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingTextarea"
              label="Password"
              className="mb-3"
            >
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>

            <Button type="submit" variant="primary">
              Sign In
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default Login;
