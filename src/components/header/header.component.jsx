import React from "react";
import "./header.styles.scss";
import { Navbar, Form, FormControl } from "react-bootstrap";

const Header = ({ handleInputChange, searchTerm }) => {
  return (
    <header className="App-header">
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">OnTrack Retail</Navbar.Brand>
        <Form className="ml-auto" inline>
          <FormControl
            type="text"
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder="Search"
            className="mr-sm-2"
            value={searchTerm ? searchTerm : ""}
          />
        </Form>
      </Navbar>
    </header>
  );
};
export default Header;
