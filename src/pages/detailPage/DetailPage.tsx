import { useEffect, useState } from "react";
import movies, { TMovie } from "../../../movies";
import { useParams } from "react-router-dom";

const DetailPage = () => {
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
          <button className="btn-genre" type="button">
            {singleGenre}
          </button>
        ))}
      </p>
    </section>
  );
};

export default DetailPage;
