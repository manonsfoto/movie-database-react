import { useEffect, useState } from "react";
import "./SearchBar.css";
import { TMovie } from "../../../movies";
import { Link } from "react-router-dom";

interface Props {
  dataMovies: TMovie[];
}

const SearchBar: React.FC<Props> = ({ dataMovies }) => {
  const [search, setSearch] = useState<string>("");
  const [searchedMovies, setSearchedMovies] = useState<TMovie[]>([]);

  useEffect(() => {
    if (dataMovies) {
      const filterByTitle = dataMovies.filter((singleMovie) =>
        singleMovie.title.toLowerCase().includes(search.toLowerCase().trim())
      );

      setSearchedMovies(filterByTitle);
    } else {
      console.log("no data 😭");
    }
  }, [search, dataMovies]);

  return (
    <>
      <div className="search-bar">
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
          type="text"
          value={search}
          placeholder="search by title"
        />
      </div>
      <div className="search-output">
        {search.length > 0 && (
          <div className="flex">
            {searchedMovies.length > 0 ? (
              searchedMovies.map((movie) => (
                <Link
                  to={`movies/${movie.title + movie.year}`}
                  className="movie-title"
                  key={movie.title + movie.year}
                >
                  {movie.title}
                </Link>
              ))
            ) : (
              <p>nothing found</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;
