import axios from "axios";
const key = "a1dc06d0f8d65b34ac156d07fe333060";
const baseURL = "https://api.themoviedb.org";

const FetchAPITest = async (req, res) => {
  try {
    const genres = await axios
      .get(`${baseURL}/3/genre/movie/list?api_key=${key}`)
      .then(({ data: { genres } }) => genres);
    return res.json({ genres });
  } catch (e) {}
};

export default FetchAPITest;
