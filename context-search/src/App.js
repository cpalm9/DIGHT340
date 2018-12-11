import React, { Component } from 'react';


const App = ({ films, searchTerm, searchTermChanged }) => {
  return (
    <>
      {films.map(film => (
        <h2 key={film.episode_id}>{film.title}</h2>
      ))}
    </>
  )
}

export default App;
