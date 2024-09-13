
import axios from "axios";
import './App.scss';
import "@fontsource/poppins";
import MovieInfoComponent from "./component/MovieInfoComponent";
import MovieComponent from "./component/MovieComponent";
import { useState } from "react";
import ScrollToTop from "react-scroll-to-top";

export const API_KEY = 'f30e88d3';

function App() {
  const [searchQuery, updateSearchQuery] = useState();
  const [timeoutId, updateTimeoutId] = useState();
  const [movieList, updateMovieList] = useState();
  const [selectedMovie, onMovieSelect] = useState();
  const fetchData = async (searchString) => {
    const response = await axios.get(`https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`);
    console.log(response, "hello")
    updateMovieList(response.data.Search)
  }

 const onTextChange = (event) => {
    clearTimeout(timeoutId);
    updateSearchQuery(event.target.value);
    const timeout = setTimeout(() => fetchData(event.target.value), 500);
    updateTimeoutId(timeout)

  };
  return (
    <div className="container">
              <ScrollToTop smooth color="#6f00ff" />
      <div className='header-bg'>
        <div className='header-flex'>
          <div className='d-flex'><div>
          <img src={`${process.env.PUBLIC_URL}/images/reel.png`} alt="Reel logo" width="40px" />
            </div>
            <div className='header-heading'> React Movie App</div></div>
          <div className='search-box'>
            <div className='search-icon'><img src={`${process.env.PUBLIC_URL}/images/search-icon.png`} alt='search image' width="32px" /></div>
            <div> <input type="text" name="search" value={searchQuery} placeholder="Search movie name .." onChange={onTextChange} /></div>
          </div>
        </div>
      </div>

      {selectedMovie &&
        (<MovieInfoComponent selectedMovie={selectedMovie}
          onMovieSelect={onMovieSelect} />)
      }
      <div className="movie-list-container">
        {movieList?.length ? movieList.map((movie, index) => (
          <MovieComponent key={index} movie={movie} onMovieSelect={onMovieSelect} />
        ))
          : <img src={`${process.env.PUBLIC_URL}/images/reel.png`} width="150px" height="150px" style={{ margin: "50px auto", opacity: "20%" }} alt="Reelimage" />}

      </div>
      <div>
      </div>
      </div>
  );
}

export default App;
