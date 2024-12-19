import { TMovie } from "../../../movies";
import MovieList from "../../components/movieList/MovieList";

interface Props {
  dataMovies: TMovie[];
  setDataMovies: React.Dispatch<React.SetStateAction<TMovie[]>>;
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

const Home: React.FC<Props> = ({
  setDataMovies,
  dataMovies,
  setCounter,
  counter,
}) => {
  return (
    <>
      <MovieList
        setDataMovies={setDataMovies}
        dataMovies={dataMovies}
        setCounter={setCounter}
        counter={counter}
      />
    </>
  );
};

export default Home;
