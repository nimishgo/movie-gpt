import { useSelector } from "react-redux";
import useGetTrailer from "../hooks/useGetTrailer";

const VideoContainer = ({ id }) => {
  useGetTrailer(id);
  const key = useSelector((store) => store.movies.nowPlayingTrailer?.key);
  return (
    <div className="absolute -z-5 w-full top-0">
      <iframe
        className="select-none  aspect-video w-full text-white pointer-events-none"
        src={`https://www.youtube.com/embed/${key}?controls=0&autoplay=1&mute=1&loop=1&playlist=${key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
export default VideoContainer;
