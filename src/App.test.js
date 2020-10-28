import React from "react";
import { render } from "@testing-library/react";
import { shallow, mount } from "enzyme";
import App from "./App";
import toJson from "enzyme-to-json";

it("renders without crashing", () => {
  shallow(<App />);
});
