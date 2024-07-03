import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingTrailer } from "../utils/moviesSlice";

const useGetTrailer = (movieId) => {
  const dispatch = useDispatch();
  const fetchMovieDetail = async () => {
    const json = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      options
    );
    const movie = await json.json();
    const x = movie.results?.find((title) => title?.type === "Trailer");
    dispatch(addNowPlayingTrailer(x));
  };

  useEffect(() => {
    fetchMovieDetail();
  }, []);
};

export default useGetTrailer;
