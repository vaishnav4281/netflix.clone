import React, { useEffect, useState } from 'react';
import { API_KEY, imageurl } from '../../constants/constants';
import axios from '../../axios';
import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        const movies = response.data.results;
        if (movies.length > 0) {
          const randomIndex = Math.floor(Math.random() * movies.length);
          setMovie(movies[randomIndex]);
        }
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <header
      className="Banner"
      style={{
        backgroundImage: `url(${movie ? imageurl + movie.backdrop_path : ''})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className="content">
        <h1 className="title">{movie ? movie.title : ''}</h1>
        <div className="banner_buttons">
          <button className="button_banner">Play</button>
          <button className="button_banner">My List</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ''}</h1>
      </div>
      <div className="fade_bottom"></div>
    </header>
  );
}

export default Banner;
