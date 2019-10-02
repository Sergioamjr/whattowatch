import * as React from "react";
import { render } from "@testing-library/react";
import Home from "./pages/index.js";
import "@testing-library/jest-dom/extend-expect";

describe("App", () => {
  test("should render APP", () => {
    const { getByText, getByTestId } = render(<Home />);
    expect(getByText("Welcomes")).toBeInTheDocument();
    expect(getByTestId("title")).toHaveTextContent("Welcomes");
  });
});
