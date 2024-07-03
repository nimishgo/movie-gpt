const TOP_NOW_PLAYING = "https://api.themoviedb.org/3/movie/now_playing?page=1";
const API_KEY = "138fcf24dc0dd71ad8ed9a7d1c75ab26";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzhmY2YyNGRjMGRkNzFhZDhlZDlhN2QxYzc1YWIyNiIsIm5iZiI6MTcxOTkxNDU0My4zOTUyMzYsInN1YiI6IjY2ODNjZTIyOTFmNThkNDQ4OTFlNjI3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4xoYrb6Q-JosXxKaWUH1XovBS6TkA6wh2DfpMVxgJzU",
  },
};
export { TOP_NOW_PLAYING, API_KEY, options };
