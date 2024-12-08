function DisplayFavorites({ favorites, setSelectedMovie, setFavorites }) {
    const removeFavorite = (movie) => {
      setFavorites(favorites.filter((fav) => fav.Title !== movie.Title));
    };

    return (
      <div className="row">
        {favorites.map((movie, index) => (
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
                  className="btn btn-danger"
                  onClick={() => removeFavorite(movie)}
                >
                  Remove From Favorites
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default DisplayFavorites;
  