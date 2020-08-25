import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import { Route, Switch } from "react-router-dom";
import toJson from "enzyme-to-json";

const app = shallow(<App />);

describe("App Component Tests", () => {
  it("renders app correctly", () => {
    expect(app).toHaveLength(1);
  });

  it("should match snapshot", () => {
    expect(app).toMatchSnapshot();
  });
});
