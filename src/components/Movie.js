import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({ year, title, summary, poster, genres }) {
  return (
    <Link
      state={{
        state: {
          year,
          title,
          summary,
          poster,
          genres,
        },
      }}
      to={{
        pathname: "/movie-details",
      }}
    >
      <div className="movie">
        <img src={poster} alt={title} titele={title} />
        <div className="movie__column">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, ind) => {
              return (
                <li key={ind} className="genres__genre">
                  {genre}
                </li>
              );
            })}
          </ul>
          <p className="movie__summary">{summary.slice(0, 140)}... </p>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
