import { Link } from "react-router-dom";
import "./MovieCard.css";

interface Props {
  title: string;
  year: string;
  director: string;
  duration: string;
  genre: string[];
  rate: string;
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
          <button className="btn-genre" key={singleGenre} type="button">
            {singleGenre}
          </button>
        ))}
      </div>
    </article>
  );
};

export default MovieCard;
