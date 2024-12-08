import React, { useEffect, useState } from "react";

function MovieDetails({ selectedMovie, setSelectedMovie }) {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const url = `http://www.omdbapi.com/?i=${selectedMovie.imdbID}&apikey=f22172dd`;
      const response = await fetch(url);
      const data = await response.json();
      setMovieDetails(data);
    };

    fetchMovieDetails();
  }, [selectedMovie]);

  if (!movieDetails) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="col-10 col-md-8 bg-dark text-light border-light p-4 rounded">
      <div className="d-flex flex-column flex-md-row">
        <img
          src={movieDetails.Poster}
          alt={movieDetails.Title}
          className="img-fluid rounded mb-3 mb-md-0"
          style={{ height: "300px", width: "200px", objectFit: "cover" }}
        />
        <div className="ms-md-4">
          <h2>{movieDetails.Title}</h2>
          <p><strong>Year:</strong> {movieDetails.Year}</p>
          <p><strong>Genre:</strong> {movieDetails.Genre}</p>
          <p><strong>Director:</strong> {movieDetails.Director}</p>
          <p><strong>Actors:</strong> {movieDetails.Actors}</p>
          <p><strong>Plot:</strong> {movieDetails.Plot}</p>
          <p><strong>Language:</strong> {movieDetails.Language}</p>
          <p><strong>IMDB Rating:</strong> {movieDetails.imdbRating}</p>
          <button
            className="btn btn-danger mt-3"
            onClick={() => setSelectedMovie(null)}
          >
            Back to Movies
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
