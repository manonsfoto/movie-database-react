import movies, { TMovie } from "../../../movies";
import "./BtnGenre.css";
interface Props {
  genre: string;
  dataMovies: TMovie[];
  setDataMovies: React.Dispatch<React.SetStateAction<TMovie[]>>;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  counter: number;
}
const BtnGenre: React.FC<Props> = ({
  genre,
  dataMovies,
  setDataMovies,
  setCounter,
  counter,
}) => {
  const filterByGenre = (genreText: string) => {
    const filteredArr = movies.filter((singleMovie) =>
      singleMovie.genre.includes(genreText)
    );
    setDataMovies(filteredArr);
    setCounter(counter + 1);
  };

  return (
    <button
      onClick={() => filterByGenre(genre)}
      className="btn-genre"
      type="button"
    >
      {genre}
    </button>
  );
};

export default BtnGenre;
