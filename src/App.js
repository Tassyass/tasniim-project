import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './componets/Header';
import Search from './componets/Search';
import MovieList from './componets/MovieList';

import AddToFavourite from './componets/AddToFavourite';

function App() {
  const [selectMovie,setSelectMovie]=useState([])

 

 
  const addToFavourite = (movie) => {
    setSelectMovie([...selectMovie, movie]);
  };
  const removeFromFavourite = (movieId) => {
    const updatedMovie = selectMovie.filter((movie) => movie.id !== movieId);
    setSelectMovie(updatedMovie);
  };
  return (
    <>
    <Header/>
    <Search/>
    <AddToFavourite selectMovie={selectMovie} removeFromFavourite={removeFromFavourite}/>
    <MovieList addToFavourite={addToFavourite}/>

    </>
  );
}

export default App;
