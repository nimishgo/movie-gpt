import { useDispatch } from "react-redux";
import { options, TOP_RATED } from "../utils/constants";
import { addTopRated } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRated = () => {
  const dispatch = useDispatch();
  const fetchTopNowPlayingMovies = async () => {
    const json = await fetch(TOP_RATED, options);
    const movieList = await json.json();
    dispatch(addTopRated(movieList.results));
  };

  useEffect(() => {
    fetchTopNowPlayingMovies();
  }, []);
};

export default useTopRated;
