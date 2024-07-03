import { useState } from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainVideoContainer from "./MainVideoContainer";

const Browse = () => {
  useNowPlayingMovies();
  const [showSignOut, setShowSignOut] = useState(true);
  return (
    <div>
      <Header showSignOut={showSignOut} setShowSignOut={setShowSignOut} />
      <MainVideoContainer />
    </div>
  );
};
export default Browse;
