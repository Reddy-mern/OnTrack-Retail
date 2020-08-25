import React from "react";
import Header from "./header.component";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const wrapper = shallow(<Header />);

describe("Header component tests", () => {
  it("should match snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
