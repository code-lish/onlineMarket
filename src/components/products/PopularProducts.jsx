import { Container, Row } from "react-bootstrap";

import Header from "../Header/Header";
import ProductsCard from "./ProductsCard";

const PopularProducts = () => {
  return (
    <Container className="my-3">
      <Header title="Populer Categories" fs="35px" />
      <Row
        xs={1}
        md={3}
        lg={4}
        className="justify-content-md-between justify-content-sm-center"
      >
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
      </Row>
    </Container>
  );
};

export default PopularProducts;
