import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoContainer from "./VideoContainer";

const MainVideoContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;
  const mainMovies = movies[0];
  console.log(mainMovies);
  const { original_title, overview, id } = mainMovies;

  return (
    <div className="relative">
      <VideoTitle original_title={original_title} overview={overview} />
      <VideoContainer id={id} />
    </div>
  );
};

export default MainVideoContainer;
