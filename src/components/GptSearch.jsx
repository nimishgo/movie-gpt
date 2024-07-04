import { useRef } from "react";
import openai from "../utils/openAi";
import { options } from "../utils/constants";
import { addRecommendedMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import MovieCardGrid from "./MovieCardGrid";
const GptSearch = () => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    const json = await data.json();

    return json.results;
  };

  async function handleSearch() {
    const query =
      "Give me names of top 5 " +
      ref.current.value +
      " movies for example they should return a single string with only name no numbering and no newline separated by , for example: " +
      " name1, name2, name3, name4, name5";
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });
    const recommendations =
      chatCompletion.choices[0]?.message?.content.split(",");
    // console.log(recommendations);
    const recos = recommendations.map((movie) => {
      return searchMovieTMDB(movie);
    });

    const recommendedMoviesResponses = await Promise.all(recos);
    dispatch(
      addRecommendedMovies({
        recommendations: recommendations,
        recommendedMoviesResponses: recommendedMoviesResponses,
      })
    );
  }

  return (
    <div className="bg-black sm:bg-banner sm:bg-fixed">
      <div className="pt-32 flex justify-center">
        <form
          className="grid grid-cols-10 bg-gray-900 p-4 rounded-lg shadow-xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            className="px-4 py-2 rounded-lg text-black col-span-8"
            placeholder="Find movies using gpt search..."
            ref={ref}
          />
          <button
            className="bg-rose-500 px-4 py-2 rounded-lg text-white font-bold mx-4 col-span-2"
            onClick={handleSearch}
          >
            Search
          </button>
        </form>
      </div>
      <MovieCardGrid />
    </div>
  );
};
export default GptSearch;
