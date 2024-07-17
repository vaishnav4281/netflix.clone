import React, { useState, useEffect, useRef } from 'react';
import Youtube from 'react-youtube';
import './RowPost.css';
import axios from 'axios';
import { API_KEY, imageurl } from '../../constants/constants';

function RowPost(props) {
  const [movies, setmovies] = useState([]);
  const [urlid, seturlid] = useState('');
  const rowRef = useRef(null);

  useEffect(() => {
    axios.get(props.url).then((Response) => {
      setmovies(Response.data.results);
    });
  }, [props.url]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handlemovie = (id) => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((Response) => {
      if (Response.data.results.length !== 0) {
        seturlid(Response.data.results[0]);
      } else {
        console.log('array empty');
      }
    });
  };

  const scroll = (scrollOffset) => {
    rowRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <h2>{props.title}</h2>
        <div className="scroll-buttons">
          <button onClick={() => scroll(-600)} className="scroll-button-left">‹</button>
          <button onClick={() => scroll(600)} className="scroll-button-right">›</button>
        </div>
        <div className="posters d-flex" ref={rowRef}>
          {movies.map((obj) => (
            <div key={obj.id} className={`poster-container ${props.isSmall ? 'smallposter-container' : ''}`}>
              <img
                onClick={() => handlemovie(obj.id)}
                className={props.isSmall ? 'smallposter img-fluid' : 'poster img-fluid'}
                src={`${imageurl + obj.backdrop_path}`}
                alt={obj.title}
              />
            </div>
          ))}
        </div>
        {urlid && <Youtube opts={opts} videoId={urlid.key} />}
      </div>
    </div>
  );
}

export default RowPost;
