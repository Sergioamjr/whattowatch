import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { MBottom30, CategoriesLists, CategoriesItem } from "./style";

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
