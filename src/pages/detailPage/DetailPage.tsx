import { useEffect, useState } from "react";
import movies, { TMovie } from "../../../movies";
import { useParams } from "react-router-dom";
import BtnGenre from "../../components/btnGenre/BtnGenre";
interface Props {
  dataMovies: TMovie[];
  setDataMovies: React.Dispatch<React.SetStateAction<TMovie[]>>;
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}
const DetailPage: React.FC<Props> = ({
  setDataMovies,
  dataMovies,
  setCounter,
  counter,
}) => {
  const [singleMovie, setSingleMovie] = useState<TMovie | null>(null);
  const { details } = useParams();

  useEffect(() => {
    if (details && movies) {
      const findMovie = movies.find(
        (singlemovie) => details === singlemovie.title + singlemovie.year
      );
      setSingleMovie(findMovie || null);
    }
  }, [details]);

  if (!singleMovie) return <p>Loading...</p>;

  return (
    <section className="stn-details flex">
      <h1>{singleMovie.title}</h1>
      <p>{singleMovie.year}</p>
      <p>{singleMovie.director}</p>
      <p>{singleMovie.duration}</p>
      <p>{singleMovie.rate}</p>
      <p>
        {singleMovie.genre.map((singleGenre) => (
          <BtnGenre
            key={singleGenre}
            genre={singleGenre}
            setDataMovies={setDataMovies}
            dataMovies={dataMovies}
            setCounter={setCounter}
            counter={counter}
          />
        ))}
      </p>
    </section>
  );
};

export default DetailPage;
