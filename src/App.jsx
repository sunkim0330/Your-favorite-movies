import React, {useState, useEffect} from 'react';
import {API_KEY} from '../config.js';
import Search from './Search.jsx';
import MovieList from './MovieList.jsx';

export default function App() {
  const [movieData, setmovieData] = useState();
  const [movieTitle, setMovieTitle] = useState('');
  const [page, setPage] = useState(1);
  // useEffect(() => {
  //   let movieAPI = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${movieTitle}`;

  //   const getSearchResult = async () => {
  //     fetch(movieAPI)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setmovieData(data.Search)
  //       })
  //       .catch(error => console.log('Error', error))
  //   }
  //   getSearchResult();
  // }, [movieTitle])

  const fetchData = (pageNum = 1) => {
    let movieAPI = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${movieTitle}&page=${pageNum}`;

    fetch(movieAPI)
      .then(res => res.json())
      .then(data => {
        setmovieData(data.Search)
      })
      .catch(error => console.log('Error', error))
  }

  useEffect(() => {
    window.addEventListener('scroll', infiniteScroll());
    fetchData(page);
  }, [movieTitle])

  const infiniteScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      let newPage = page;
      page++;

      setPage(newPage);

      fetchData(newPage);
    }
  }

  const handleSubmit = (title) => {
    setMovieTitle(title);
  }

  return (
    <div>
      <h1 className="title">What is your favorite movie?</h1>
      <Search handleSubmit={handleSubmit} />
      <MovieList movies={movieData} />
    </div>
  )
}