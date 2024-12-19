import { TMovie } from "../../../movies";
import MovieCard from "../movieCard/MovieCard";
import "./MovieList.css";

interface Props {
  dataMovies: TMovie[];
}

const MovieList: React.FC<Props> = ({ dataMovies }) => {
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
        />
      ))}
    </section>
  );
};

export default MovieList;
