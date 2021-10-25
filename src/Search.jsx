import React, {useState} from 'react';

function Search(props) {
  const [movieTitle, setMovieTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    props.handleSubmit(movieTitle);
    setMovieTitle('');
  }

  const handleChange = e => {
    const title = e.target.value;
    setMovieTitle(title);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="search-bar">
        <label className="search-bar-title">Search for movie: </label>
        <input
          id="SearchMovieTitle"
          type="text"
          value={movieTitle}
          onChange={handleChange}
        />
        <input className="search-button" type="submit" value="Find Movies"/>
      </form>
    </div>
  )
}

export default Search;