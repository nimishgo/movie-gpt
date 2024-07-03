import { useDispatch } from "react-redux";
import { options, POPULAR } from "../utils/constants";
import { addPopular } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopular = () => {
  const dispatch = useDispatch();
  const fetchTopNowPlayingMovies = async () => {
    const json = await fetch(POPULAR, options);
    const movieList = await json.json();
    dispatch(addPopular(movieList.results));
  };

  useEffect(() => {
    fetchTopNowPlayingMovies();
  }, []);
};

export default usePopular;
