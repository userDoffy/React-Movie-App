import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import DisplayMovieList from "./components/DisplayMovieList";
import SearchBox from "./components/SearchBox";
import MovieDetails from "./components/MovieDetails";
import DisplayFavorites from "./components/DisplayFavorites";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const getMovies = async (query) => {
    try {
      const url = `http://www.omdbapi.com/?s=${query.trim()}&apikey=f22172dd`;
      const response = await fetch(url);
      const responseJson = await response.json();
      if (responseJson.Search) {
        setMovies(responseJson.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    getMovies(searchValue);
  }, [searchValue]);

  // Load favorites from localStorage on initial render
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className="container-fluid bg-dark text-light min-vh-100">
      <header className="py-4 text-center">
        <h1 className="display-5">Movie Explorer</h1>
      </header>

      {selectedMovie ? (
        <div className="row justify-content-center">
          <MovieDetails
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
          />
        </div>
      ) : (
        <>
          <div className="row justify-content-center mb-4">
            <SearchBox
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </div>
          <div className="row">
            <DisplayMovieList
              movies={movies}
              setSelectedMovie={setSelectedMovie}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          </div>
          <div className="row">
            <h3>Favorites</h3>
            <DisplayFavorites
              favorites={favorites}
              setFavorites={setFavorites}
              setSelectedMovie={setSelectedMovie}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
