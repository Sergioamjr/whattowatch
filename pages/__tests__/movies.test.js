import React from "react";
import { render } from "@testing-library/react";
import Movies from "./../movies";

describe("Movies", () => {
  it("should render", () => {
    render(<Movies />);
  });
});
