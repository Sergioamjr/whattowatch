import React from "react";
import { render } from "@testing-library/react";
import Movies from "./../pages/movies";
import "@testing-library/jest-dom/extend-expect";

describe("Movies", () => {
  it("should render Movies page", () => {
    const { getByText } = render(<Movies />);
    expect(getByText("MovieMmendation")).toBeInTheDocument();
  });
});
