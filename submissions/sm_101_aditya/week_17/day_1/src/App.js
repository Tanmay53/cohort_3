import React from 'react';
import MovieForm from './Components/MovieForm';
import FilterMovies from './Components/FilterMovies'
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <MovieForm/>
      <FilterMovies/>
    </div>
  );
}

export default App;
