import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "next/link";
import { GridUL } from "../Header/styles";

const MBottom30 = styled.div`
  margin-bottom: 20px;
`;

const CategoriesLists = styled(GridUL)`
  justify-content: normal;
  flex-wrap: wrap;
`;

const CategoriesItem = styled.li`
  a {
    display: block;
    margin-bottom: 15px;
    border: 1px solid #b62d54;
    padding: 5px;
    text-decoration: none;
    margin-right: 10px;
    color: ${props => (props.selected ? "#fff" : "#b62d54")};
    font-size: 14px;
    white-space: pre;
    background: ${props => (props.selected ? "#b62d54" : "")};
  }
`;

const GenrerList = props => {
  return (
    <div>
      {props.genres.length > 0 && (
        <MBottom30>
          <CategoriesLists>
            <CategoriesItem selected={!props.selected}>
              <Link href="/" as="/">
                <a>All</a>
              </Link>
            </CategoriesItem>
            {props.genres.map(({ id, name }) => (
              <CategoriesItem
                selected={props.selected === id.toString()}
                key={id}
              >
                <Link href="/genrer/[id]" as={`/genrer/${id}`}>
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
  genres: PropTypes.array,
  selected: PropTypes.string
};

export default GenrerList;
