import React from "react";
import { render } from "@testing-library/react";
import Head from "./Head";

describe("<Head />", () => {
  it("should render Header", () => {
    render(<Head />);
  });
});
