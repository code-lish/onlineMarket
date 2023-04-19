import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import img4 from "../../assets/images/img4.jpg";
import Rating from "../../components/rating/Rating";
import Header from "../../components/Header/Header";
import CommentsList from "../../components/comments/CommentsList";

const SingleProduct = () => {
  return (
    <Container className="mt-4">
      <Row xs={1} md={2}>
        <Col
          xs={{ order: 2 }}
          md={{ order: 1 }}
          className="d-flex flex-column m-2 m-md-0"
        >
          <Image src={img4} width="200px" height="250px" />
          <h2 className="fw-bold mt-4 mb-4">Comments</h2>
          <CommentsList />
        </Col>
        <Col xs={{ order: 1 }} md={{ order: 2 }}>
          <h3 className="text-primary">category</h3>
          <p className="display-5">title</p>
          <p className="fw-bold d-flex align-items-center">
            <span className="me-2">5 Reviews</span>
            <Rating />
          </p>

          <h2 className="text-primary">$price</h2>
          <p className="lead">description</p>
          <Button variant="outline-primary w-100 mt-3">Add to cart</Button>
          <Button variant="primary" className="mt-3 w-100">
            go to cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleProduct;
