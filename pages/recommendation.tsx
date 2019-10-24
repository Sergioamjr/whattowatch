import React from "react";
import _get from "lodash/get";
import Layout from "../components/Layout/Layout";
import { AppContext } from "./_app";
import { fetchCustomData } from "../services";
import Loading from "../components/Loading";
import * as Style from "../styles";
import { generateRandonNumber } from "./../utils";

const Movies: React.FC<{}> = () => {
  const [recommendedMovie, setRecommendedMovie] = React.useState({});
  const [selecteds, setSelecteds] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(false);
  const { genres } = React.useContext(AppContext);

  const AddToSelectedsIds = (id: String) => {
    setSelecteds(selecteds.concat(id));
  };
  const RemoveFromSelectedsIds = (id: String) => {
    setSelecteds(selecteds.filter(ids => ids !== id));
  };

  const fetchMovies = async () => {
    try {
      setIsFetching(true);
      const { results } = await fetchCustomData("3/discover/movie", {
        with_genres: selecteds.join()
      });
      const key = generateRandonNumber(0, results.length - 1);
      setRecommendedMovie(results[key]);
      setIsFetching(false);
    } catch (error) {}
  };

  const name = _get(recommendedMovie, "original_title");
  const img = _get(recommendedMovie, "poster_path");

  return (
    <Layout>
      <div className="hero">
        <h1 className="title" data-testid="title">
          Recomendation
        </h1>
        <p>Select the genres that you would like to watch:</p>
        <form>
          {genres.map(({ id, name }) => (
            <Style.Form.InputWrapper inline key={id}>
              <Style.Form.Input
                inline
                disabled={isFetching}
                onChange={() =>
                  !selecteds.includes(id)
                    ? AddToSelectedsIds(id)
                    : RemoveFromSelectedsIds(id)
                }
                checked={selecteds.includes(id)}
                id={id}
                type="checkbox"
              />
              <Style.Form.Label inline htmlFor={id}>
                {name}
              </Style.Form.Label>
            </Style.Form.InputWrapper>
          ))}
          <Style.Button onClick={fetchMovies}>
            Look for recommendation
          </Style.Button>
        </form>
        {name && <p>{name}</p>}
        {img && <img src={`https://image.tmdb.org/t/p/w500/${img}`} />}
        {isFetching && <Loading />}
      </div>
    </Layout>
  );
};

export default Movies;
