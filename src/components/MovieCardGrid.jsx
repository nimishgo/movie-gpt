import { useDispatch, useSelector } from "react-redux";
import { IMG_URL } from "../utils/constants";

const MovieCardGrid = () => {
  const { recommendations, recommendedMoviesResponses } = useSelector(
    (store) => store.movies?.recommendedMovies
  );

  if (!recommendations) {
    return null;
  }
  return (
    <div className="p-4 opacity-95 m-16 h-fit overflow-y-auto ">
      {recommendations?.map((title, index) => {
        return (
          <div className="space-y-4">
            <h1 className="text-white text-2xl font-bold p-4">
              {title} &nbsp;&gt;
            </h1>
            <div className="grid grid-cols-6 gap-1 gap-y-8 p-4">
              {recommendedMoviesResponses[index]?.map((movie) => {
                return (
                  <>
                    {movie.poster_path && (
                      <>
                        <img
                          src={IMG_URL + movie.poster_path}
                          key={movie.title}
                          alt={movie.title}
                          className="min-w-52 max-h-80 rounded-lg select-none "
                          draggable="false"
                        />
                      </>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default MovieCardGrid;
