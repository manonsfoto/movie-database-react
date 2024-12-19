import { Link } from "react-router-dom";
import { TMovie } from "../../../movies";
import "./Nav.css";
import SearchBar from "../searchBar/SearchBar";
interface Props {
  dataMovies: TMovie[];
  setDataMovies: React.Dispatch<React.SetStateAction<TMovie[]>>;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  counter: number;
}

const Nav: React.FC<Props> = ({
  setDataMovies,
  dataMovies,
  setCounter,
  counter,
}) => {
  const sortByDateAsc = () => {
    const sortedArr = dataMovies.sort(
      (a: TMovie, b: TMovie) => Number(a.year) - Number(b.year)
    );
    setDataMovies(sortedArr);
    setCounter(counter + 1);
  };
  const sortByDateDes = () => {
    const sortedArr = dataMovies.sort(
      (a: TMovie, b: TMovie) => Number(b.year) - Number(a.year)
    );
    setDataMovies(sortedArr);
    setCounter(counter + 1);
  };
  const sortByBestRate = () => {
    const sortedArr = dataMovies.sort(
      (a: TMovie, b: TMovie) => Number(b.rate) - Number(a.rate)
    );
    setDataMovies(sortedArr);
    setCounter(counter + 1);
  };
  const sortByTitleAsc = () => {
    const sortedArr = dataMovies.sort((a: TMovie, b: TMovie) =>
      a.title.localeCompare(b.title)
    );
    setDataMovies(sortedArr);
    setCounter(counter + 1);
  };
  const sortByTitleDes = () => {
    const sortedArr = dataMovies.sort((a: TMovie, b: TMovie) =>
      b.title.localeCompare(a.title)
    );
    setDataMovies(sortedArr);
    setCounter(counter + 1);
  };

  return (
    <nav>
      <ul className="flex navbar">
        <li>
          <Link to={"/"}>
            {" "}
            <button onClick={sortByDateAsc} type="button">
              Sort by Date Ascending
            </button>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            {" "}
            <button onClick={sortByDateDes} type="button">
              Sort by Date Descending
            </button>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <button onClick={sortByBestRate} type="button">
              Best Rate
            </button>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <button onClick={sortByTitleAsc} type="button">
              A-Z
            </button>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <button onClick={sortByTitleDes} type="button">
              Z-A
            </button>
          </Link>
        </li>

        <li>
          <SearchBar dataMovies={dataMovies} />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
