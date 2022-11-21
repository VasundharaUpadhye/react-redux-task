import React from "react";
import Card from "react-bootstrap/Card";

const Product = ({ image, title, category, price, id }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />

      <Card.Body>
        <Card.Link href={`/products/${id}`}>{title}</Card.Link>
        <Card.Text>{category}</Card.Text>
        <Card.Text>${price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
