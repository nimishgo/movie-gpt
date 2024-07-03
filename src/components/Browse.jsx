import { useState } from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainVideoContainer from "./MainVideoContainer";
import MovieScroll from "./MovieScroll";
import useTopRated from "../hooks/useTopRated";
import usePopular from "../hooks/usePopular";
import useUpcoming from "../hooks/useUpcoming";

const Browse = () => {
  useNowPlayingMovies();
  useTopRated();
  usePopular();
  useUpcoming();
  const [showSignOut, setShowSignOut] = useState(true);
  return (
    <div>
      <Header showSignOut={showSignOut} setShowSignOut={setShowSignOut} />
      <MainVideoContainer />
      <MovieScroll />
    </div>
  );
};
export default Browse;
