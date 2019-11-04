import React from "react";
import Link from "next/link";
import * as Style from "./style";
import { GenresType } from "./../../utils/types";

interface Props {
  genres: GenresType[];
  selected?: string;
}

const GenrerList: React.FC<Props> = props => {
  return (
    <div>
      {props.genres.length > 0 && (
        <Style.MBottom30>
          <Style.CategoriesLists>
            <Style.CategoriesItem selected={!props.selected}>
              <Link href="/" as="/">
                <a>All</a>
              </Link>
            </Style.CategoriesItem>
            {props.genres.map(({ id, name }) => (
              <Style.CategoriesItem
                selected={props.selected === id.toString()}
                key={id}
              >
                <Link href="/genrer/[id]" as={`/genrer/${id}`}>
                  <a>{name}</a>
                </Link>
              </Style.CategoriesItem>
            ))}
          </Style.CategoriesLists>
        </Style.MBottom30>
      )}
    </div>
  );
};

export default GenrerList;
