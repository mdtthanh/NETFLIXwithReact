import React from "react";
import requests from "./../Requests";
import { useState, useEffect } from "react";
import axios from "axios";
const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  console.log(movies);
  return (
    <div className="w-full h-[550] text-white">
      <div className="w-full h-[550px] bg-gradient-to-r from-black">
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt="{movie?.title}"
        />
        <div>
            <button>Play</button>
            <button>Watch</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
