import { useSelector } from "react-redux";
import { IMG_URL } from "../utils/constants";
import CustomCarousel from "./MovieCarousel";
const MovieScroll = () => {
  const movies = useSelector((store) => store.movies);
  const { nowPlayingMovies, popular, topRated, upcoming } = movies;
  return (
    <div className="relative -top-52 px-4 z-30 space-y-5">
      <h1 className="px-5 text-3xl text-white">Now Playing Movies</h1>
      <CustomCarousel>
        {nowPlayingMovies?.map((x) => {
          return (
            <div key={x.title}>
              <img
                src={IMG_URL + x.poster_path}
                alt={x.title}
                className="min-w-52 rounded-lg select-none "
                draggable="false"
              />
            </div>
          );
        })}
      </CustomCarousel>
      <h1 className="px-5 text-3xl text-white">Top Rated</h1>
      <CustomCarousel>
        {topRated?.map((x) => {
          return (
            <div key={x.title}>
              <img
                src={IMG_URL + x.poster_path}
                alt={x.title}
                className="min-w-52 rounded-lg select-none "
                draggable="false"
              />
            </div>
          );
        })}
      </CustomCarousel>
      <h1 className="px-5 text-3xl text-white">Upcoming</h1>
      <CustomCarousel>
        {upcoming?.map((x) => {
          return (
            <div key={x.title}>
              <img
                src={IMG_URL + x.poster_path}
                alt={x.title}
                className="min-w-52 rounded-lg select-none "
                draggable="false"
              />
            </div>
          );
        })}
      </CustomCarousel>
      <h1 className="px-5 text-3xl text-white">Popular</h1>
      <CustomCarousel>
        {popular?.map((x) => {
          return (
            <div key={x.title}>
              <img
                src={IMG_URL + x.poster_path}
                alt={x.title}
                className="min-w-52 rounded-lg select-none "
                draggable="false"
              />
            </div>
          );
        })}
      </CustomCarousel>
    </div>
  );
};

export default MovieScroll;
