import { TMovie } from "../../../movies";
import MovieList from "../../components/movieList/MovieList";

interface Props {
  dataMovies: TMovie[];
}

const Home: React.FC<Props> = ({ dataMovies }) => {
  return (
    <>
      <MovieList dataMovies={dataMovies} />
    </>
  );
};

export default Home;
