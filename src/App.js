
import './App.css';

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './componets/Header';
import Search from './componets/Search';
import MovieList from './componets/MovieList';
import AddToFavourite from './componets/AddToFavourite';
import NavBar from './componets/NavBar';
import LogIn from './componets/LogIn';

function App() {
  const [selectMovie, setSelectMovie] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');


  



  const addToFavourite = (movie) => {
    setSelectMovie([...selectMovie, movie]);
  };

  const removeFromFavourite = (movieId) => {
    const updatedMovie = selectMovie.filter((movie) => movie.id !== movieId);
    setSelectMovie(updatedMovie);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };


  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </Router>
  );

  function MainApp() {
    return (
      <>
        <Header />
        <NavBar />
      
      <Search handleSearch={handleSearch} />
      <AddToFavourite selectMovie={selectMovie} removeFromFavourite={removeFromFavourite} />
      <MovieList addToFavourite={addToFavourite} searchQuery={searchQuery}/>
    </>
      
    );
  }
}

export default App;