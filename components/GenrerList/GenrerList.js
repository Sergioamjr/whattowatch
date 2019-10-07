import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "next/link";
import { GridUL } from "../Header/styles";

const MBottom30 = styled.div`
  margin-bottom: 30px;
`;

const CategoriesLists = styled(GridUL)`
  justify-content: normal;
  overflow: scroll;
  padding-bottom: 30px;
`;

const CategoriesItem = styled.li`
  a {
    display: block;
    background: #b62d54;
    padding: 5px;
    border-radius: 3px;
    text-decoration: none;
    margin-right: 10px;
    color: #fff;
    white-space: pre;
  }
`;

const GenrerList = props => {
  return (
    <div>
      {props.genres.length > 0 && (
        <MBottom30>
          <p>Genres</p>
          <CategoriesLists>
            {props.genres.map(({ id, name }) => (
              <CategoriesItem key={id}>
                <Link href={`/genrer/${id}`}>
                  <a>{name}</a>
                </Link>
              </CategoriesItem>
            ))}
          </CategoriesLists>
        </MBottom30>
      )}
    </div>
  );
};

GenrerList.propTypes = {
  genres: PropTypes.array
};

export default GenrerList;
