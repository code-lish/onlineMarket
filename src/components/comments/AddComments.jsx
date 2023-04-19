import { Button, FloatingLabel, Form } from "react-bootstrap";

const AddComments = () => {
  return (
    <div className="my-4">
      <Form>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Leave a comment here"
          className="mb-3"
        >
          <Form.Control as="textarea" placeholder="Leave a comment here" />
        </FloatingLabel>
        <Button variant="primary">Add Comment</Button>
      </Form>
    </div>
  );
};

export default AddComments;
