import { useDispatch } from "react-redux";
import { options, UPCOMING } from "../utils/constants";
import { addUpcoming } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcoming = () => {
  const dispatch = useDispatch();
  const fetchTopNowPlayingMovies = async () => {
    const json = await fetch(UPCOMING, options);
    const movieList = await json.json();
    dispatch(addUpcoming(movieList.results));
  };

  useEffect(() => {
    fetchTopNowPlayingMovies();
  }, []);
};

export default useUpcoming;
