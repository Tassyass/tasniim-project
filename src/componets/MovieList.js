import React from "react"
import { useState,useEffect } from "react"
export default function ({addToFavourite, searchQuery}){
const[movies,setMovies]=useState([])
const [filteredMovies, setFilteredMovies] = useState([]);
useEffect(() => {
    fetch('http://localhost:3000/movies')
      .then((res) => res.json())
      .then((moviesData) => {
        setMovies(moviesData);
        setFilteredMovies(moviesData); // Initially set filtered movies to all movies
      });
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies(movies);
    }
  }, [searchQuery, movies]);


  return (
    <>
      <h2>CLASSIC MOVIES</h2>
      <div className="movie-display">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img src={movie.posterUrl} alt={movie.title} />
              <h2>Title: {movie.title}</h2>
              <h2>Year: {movie.year}</h2>
              <h3>Runtime: {movie.runtime}</h3>
              <button onClick={() => addToFavourite(movie)}>
                ADD TO FAVOURITE
              </button>
            </div>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </>
  );
}