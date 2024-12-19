import { Link } from "react-router-dom";
import "./MovieCard.css";
import BtnGenre from "../btnGenre/BtnGenre";
import { TMovie } from "../../../movies";

interface Props {
  title: string;
  year: string;
  director: string;
  duration: string;
  genre: string[];
  rate: string;

  setDataMovies: React.Dispatch<React.SetStateAction<TMovie[]>>;
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

const MovieCard: React.FC<Props> = (props) => {
  return (
    <article className="movie-card flex">
      <Link to={`movies/${props.title + props.year}`}>
        {" "}
        <div>
          <p className="title">{props.title}</p>
          <p>{props.year}</p>
          <p>{props.director}</p>
          <p>{props.duration}</p>
          <p>{props.rate}</p>
        </div>{" "}
      </Link>
      <div className="btn-genre-wrapper">
        {props.genre.map((singleGenre) => (
          <BtnGenre
            key={singleGenre}
            genre={singleGenre}
            setDataMovies={props.setDataMovies}
            setCounter={props.setCounter}
            counter={props.counter}
          />
        ))}
      </div>
    </article>
  );
};

export default MovieCard;
