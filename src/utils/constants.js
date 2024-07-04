const TOP_NOW_PLAYING = "https://api.themoviedb.org/3/movie/now_playing?page=1";
const POPULAR = "https://api.themoviedb.org/3/movie/popular?page=1";
const TOP_RATED = "https://api.themoviedb.org/3/movie/top_rated?page=1";
const UPCOMING = "https://api.themoviedb.org/3/movie/upcoming?page=1";
const IMG_URL = "https://image.tmdb.org/t/p/w300";
const MOVIE_API = "https://api.themoviedb.org/3/search/";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDB,
  },
};

export {
  TOP_NOW_PLAYING,
  POPULAR,
  TOP_RATED,
  UPCOMING,
  IMG_URL,
  options,
  MOVIE_API,
};
