import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./home.styles.scss";
import { Row, Col } from "react-bootstrap";
import Book from "../book/book.component";
import Header from "../header/header.component";
import PaginationComponent from "../pagination/pagination.component";
const axios = require("axios");

const Home = ({ match }) => {
  const history = useHistory();
  const search = useLocation().search;
  const searchTerm = new URLSearchParams(search).get("search");

  const [books, setbooks] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [totalBooks, settotalBooks] = useState(0);
  const [activePage, setactivepage] = useState(0);
  const [currentPage, setcurrentPage] = useState(1);
  const itemsPerPage = 20;

  const nextPage = (pageNumber, searchTerm) => {
    searchTerm
      ? history.push(`/books/${pageNumber}?search=${searchTerm}`)
      : history.push(`/books/${pageNumber}`);
  };

  useEffect(() => {
    const page = match.params.page
      ? match.params.page
      : history.push(`/books/1`);
    getBooks(page, searchTerm ? searchTerm : "");
  }, [match.params.page, searchTerm, history]);

  const getBooks = async (page, seartchTerm) => {
    const filter = {
      page,
      itemsPerPage,
      filters: seartchTerm ? [{ type: "all", values: [seartchTerm] }] : [],
    };
    const booksResponse = await axios.post(
      "http://nyx.vima.ekt.gr:3000/api/books",
      filter
    );
    setcurrentPage(page);
    setactivepage(page);
    setisLoading(true);
    setbooks(booksResponse.data.books);
    settotalBooks(booksResponse.data.count);
  };

  return (
    <div className="App">
      <Header
        handleInputChange={(searchTerm) => nextPage(currentPage, searchTerm)}
        searchTerm={searchTerm}
      />
      <Row className="m-0">
        {books && !isLoading ? (
          <h1 className="text-center">Loading....</h1>
        ) : (
          books.map((book) => (
            <Col className="card-col" lg={3} key={book.id}>
              <Book bookdet={book}></Book>
            </Col>
          ))
        )}
      </Row>
      {books.length === 0 && isLoading ? (
        <h1 className="text-center">No Books</h1>
      ) : (
        <PaginationComponent
          getPageNumber={(page) => nextPage(page, searchTerm)}
          itemsPerPage={itemsPerPage}
          totalBooks={totalBooks}
          activePage={activePage}
          currentPage={currentPage}
          nextPage={() => nextPage(Number(currentPage) + 1, searchTerm)}
          prevPage={() => nextPage(Number(currentPage) - 1, searchTerm)}
        ></PaginationComponent>
      )}
    </div>
  );
};

export default Home;
