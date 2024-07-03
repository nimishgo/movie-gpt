import { useDispatch } from "react-redux";
import { options, TOP_NOW_PLAYING } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const fetchTopNowPlayingMovies = async () => {
    const json = await fetch(TOP_NOW_PLAYING, options);
    const movieList = await json.json();
    dispatch(addNowPlayingMovies(movieList.results));
  };

  useEffect(() => {
    fetchTopNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
