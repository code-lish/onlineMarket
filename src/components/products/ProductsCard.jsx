import { Button, Card, Col } from "react-bootstrap";
import img4 from "../../assets/images/img4.jpg";
import Rating from "../rating/Rating";

const ProductsCard = () => {
  return (
    <Col>
      <Card className="p-2 mt-4">
        <div className="d-flex align-items-center justify-content-center">
          <img variant="top" src={img4} width="150px" height="200px" />
        </div>
        <Card.Body>
          <Card.Title>Product title</Card.Title>
          <div className="fw-bold d-flex align-items-center my-1 mb-2 justify-content-between">
            <p className="m-0 p-0">12012.00$</p>
            <Rating />
          </div>
          <Button variant="primary" className="w-100">
            Buy
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductsCard;
