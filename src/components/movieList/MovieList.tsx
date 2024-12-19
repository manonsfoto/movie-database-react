import { TMovie } from "../../../movies";
import MovieCard from "../movieCard/MovieCard";
import "./MovieList.css";

interface Props {
  dataMovies: TMovie[];
  setDataMovies: React.Dispatch<React.SetStateAction<TMovie[]>>;
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

const MovieList: React.FC<Props> = ({
  setDataMovies,
  dataMovies,
  setCounter,
  counter,
}) => {
  return (
    <section className="flex stn-movieList">
      {dataMovies.map((singleMovie) => (
        <MovieCard
          key={singleMovie.title + singleMovie.year}
          title={singleMovie.title}
          year={singleMovie.year}
          director={singleMovie.director}
          duration={singleMovie.duration}
          genre={singleMovie.genre}
          rate={singleMovie.rate}
          setDataMovies={setDataMovies}
          setCounter={setCounter}
          counter={counter}
        />
      ))}
    </section>
  );
};

export default MovieList;
