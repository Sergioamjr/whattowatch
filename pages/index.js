import React from "react";
import { Transition } from "react-transition-group";
import InfiniteScroll from "react-infinite-scroller";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import { Row } from "../styles";
import ShowItem from "../components/ShowItem/ShowItem";
import GenrerList from "../components/GenrerList/GenrerList";
import { AppContext } from "./_app";
import { fetchMovies } from "../services";

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

const Loading = styled.div`
  height: 400px;
  background: red;
`;

const ScrollWraper = styled(InfiniteScroll)`
  flex-wrap: wrap;
  margin: 0 -15px;
  display: flex;
  justify-content: space-between;
`;

const Home = () => {
  const [page, setPage] = React.useState(1);
  const { genres } = React.useContext(AppContext);
  const [movies_, setMovies_] = React.useState([]);
  // const { inProp } = fetchAllMovies(page);

  const fetchMore = async f => {
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
                <div style={{ height: 700, overflow: "auto" }}>
                  <ScrollWraper
                    pageStart={0}
                    loadMore={fetchMore}
                    hasMore={page < 499}
                    loader={<Loading key={0}>Loading ...</Loading>}
                    useWindow={false}
                  >
                    {movies_
                      .sort((a, b) => {
                        if (a.popularity > b.popularity) {
                          return -1;
                        }
                        if (a.popularity < b.popularity) {
                          return 1;
                        }
                        return 0;
                      })
                      .map((movie, index) => (
                        <Row key={index} xs={12} sm={4} md={3} lg={2}>
                          <ShowItem {...movie} />
                        </Row>
                      ))}
                  </ScrollWraper>
                </div>
              </div>
            </div>
          );
        }}
      </Transition>
    </Layout>
  );
};

export default Home;
