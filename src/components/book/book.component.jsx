import React from "react";
import { Card } from "react-bootstrap";

import "./book.styles.scss";
const Book = (props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.bookdet.book_author}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.bookdet.book_title}
        </Card.Subtitle>
        <Card.Text>{props.bookdet.book_publication_city}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Book;
