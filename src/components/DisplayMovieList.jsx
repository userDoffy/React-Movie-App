function DisplayMovieList({
  movies,
  setSelectedMovie,
  favorites,
  setFavorites,
}) {
  const updateFavorites = (movie) => {
    if (favorites.some((fav) => fav.Title === movie.Title)) {
      // If the movie is already in favorites, remove it
      setFavorites(favorites.filter((fav) => fav.Title !== movie.Title));
      console.log(`${movie.Title} removed from favorites`);
    } else {
      // Otherwise, add the movie to favorites
      setFavorites([...favorites, movie]);
      console.log(`${movie.Title} added to favorites`);
    }
  };

  return (
    <>
      {movies.map((movie, index) => (
        <div className="col-md-2 col-sm-4 col-6 mb-4" key={index}>
          <div
            className="card bg-dark border-light text-light"
            style={{ cursor: "pointer" }}
          >
            <div onClick={() => setSelectedMovie(movie)}>
              <img
                src={movie.Poster}
                className="card-img-top img-fluid"
                alt={movie.Title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h6 className="card-title">{movie.Title}</h6>
              </div>
            </div>

            <div className="card-body text-center">
              <button
                type="button"
                className="btn btn-info"
                onClick={() => updateFavorites(movie)}
              >
                {favorites.some((fav) => fav.Title === movie.Title)
                  ? "Remove From Favorites"
                  : "Add To Favorite"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default DisplayMovieList;
