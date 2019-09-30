import * as React from "react";
import { mount } from "enzyme";
import Home from "./pages/index.js";

describe("App", () => {
  test("should render APP", () => {
    const wrapper = mount(<Home />);
    expect(wrapper).toHaveLength(1);
  });

  test("should render component inside Layout", () => {
    const wrapper = mount(<Home />);
    const layout = wrapper.find("Layout");
    expect(layout).toHaveLength(1);
  });
});
