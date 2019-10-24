import React from "react";
import { Transition } from "react-transition-group";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import GenrerList from "../components/GenrerList/GenrerList";
import { AppContext } from "./_app";
import { fetchMovies } from "../services";
import DynamicInfiniteScroll from "../components/InfiniteScroll";

const duration = 500;

const defaultStyle = {
  transition: `all ${duration}ms ease`,
  opacity: 1
};

const transitionStyles = {
  entering: { opacity: 1, transform: "translateX(0px)" },
  entered: { opacity: 1, transform: "translateX(0px)" },
  exiting: { opacity: 0, transform: "translateX(-30px)" },
  exited: { opacity: 0, transform: "translateX(30px)" }
};

const H1 = styled.h1`
  margin-bottom: 30px;
`;

const Home = () => {
  const [page, setPage] = React.useState(1);
  const { genres } = React.useContext(AppContext);
  const [movies_, setMovies_] = React.useState([]);
  // const { inProp } = fetchAllMovies(page);

  const fetchMore = async f => {
    console.log("fetch");
    try {
      const newMovies = await fetchMovies(page);
      setMovies_(movies_.concat(newMovies));
      setPage(page + 1);
    } catch (error) {}
  };

  return (
    <Layout>
      <Transition in={true} timeout={500}>
        {state => {
          return (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}
            >
              <div>
                <H1 className="title" data-testid="title">
                  Lasts movies
                </H1>
                <GenrerList genres={genres} />
                <DynamicInfiniteScroll
                  config={{
                    loadMore: fetchMore,
                    hasMore: page < 499
                  }}
                  items={movies_.sort((a, b) => {
                    if (a.popularity > b.popularity) {
                      return -1;
                    }
                    if (a.popularity < b.popularity) {
                      return 1;
                    }
                    return 0;
                  })}
                />
              </div>
            </div>
          );
        }}
      </Transition>
    </Layout>
  );
};

export default Home;
