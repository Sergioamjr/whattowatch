import { fetchMovies } from ".";
import { MockMovies } from "./__mocks__/apiResponse";

describe("Services", () => {
  it("should return true", () => {
    expect(true).toBe(true);
  });

  it("should test return api", async () => {
    const response = await fetchMovies();
    expect(response).toBeInstanceOf(Array);
    expect(response).toBe(MockMovies.results);
  });
});
