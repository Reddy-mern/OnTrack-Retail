import React from "react";
import Book from "./book.component";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

let book = {
  book_author: "test",
  book_title: "test book",
  book_publication_city: "london",
};

const wrapper = mount(<Book bookdet={book} />);

describe("Book Component Tests", () => {
  it("renders app correctly", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("should match snapshot", () => {
    const tree = shallow(<Book bookdet={book} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
