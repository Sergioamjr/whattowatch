import * as React from "react";
import { render } from "@testing-library/react";
import * as nextRouter from "next/router";
import { act } from "react-dom/test-utils";
import Home from "./../pages/index";
import "@testing-library/jest-dom/extend-expect";
import { fetchMoviesGenres, fetchMovies } from "./../services";
jest.mock("./../services");

nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({ route: "/" }));

describe("App", () => {
  beforeEach(() => {
    fetchMoviesGenres.mockReturnValue([]);
    fetchMovies.mockReturnValue([]);
  });
  test("should render APP", async () => {
    let wrapper;
    await act(async () => {
      wrapper = render(<Home />);
    });
    expect(wrapper.getByText("Select by genre:")).toBeInTheDocument();
  });
});
