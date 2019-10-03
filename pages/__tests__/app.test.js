import * as React from "react";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Home from "./../index";
import "@testing-library/jest-dom/extend-expect";

describe("App", () => {
  test("should render APP", async () => {
    let wrapper;
    await act(async () => {
      wrapper = render(<Home />);
    });
    expect(wrapper.getByText("Welcomes")).toBeInTheDocument();
    expect(wrapper.getByTestId("title")).toHaveTextContent("Welcomes");
  });
});
