import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

  const fetchMovies = async (searchTerm = 'Hitman') => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`);

      if (response.data.Search) {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
        setError('No movies found');
      }
    } catch (err) {
      setError('Error fetching movies');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="App">
      <Header title="MovieQuu" />
      <div className="container mt-4">
        <Search onSearch={fetchMovies} />

        {loading && (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <div className="row">
          {movies.map((movie) => (
            <Movie key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#5cb874" fill-opacity="1" d="M0,32L48,69.3C96,107,192,181,288,186.7C384,192,480,128,576,101.3C672,75,768,85,864,106.7C960,128,1056,160,1152,170.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
  );
}

export default App;