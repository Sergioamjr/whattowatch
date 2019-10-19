import { fetchMovies } from ".";
import { MockMovies } from "./__mocks__/apiResponse";
import "@testing-library/jest-dom/extend-expect";
jest.mock(".");

describe("Services", () => {
  beforeAll(() => {
    fetchMovies.mockResolvedValue(MockMovies.results);
  });

  it("should test return api", async () => {
    const response = await fetchMovies();
    expect(response).toBeInstanceOf(Array);
    expect(response).toBe(MockMovies.results);
  });
});
