import { MockMovies } from "./apiResponse";

const axios = jest.genMockFromModule("axios");

axios.get = jest.fn(() => Promise.resolve({ data: MockMovies }));

export default axios;
