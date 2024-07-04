import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    nowPlayingTrailer: null,
    topRated: null,
    popular: null,
    upcoming: null,
    recommendedMovies: {},
    nowPlayingVideoId: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addNowPlayingTrailer: (state, action) => {
      state.nowPlayingTrailer = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    addPopular: (state, action) => {
      state.popular = action.payload;
    },
    addUpcoming: (state, action) => {
      state.upcoming = action.payload;
    },
    addRecommendedMovies(state, action) {
      state.recommendedMovies = action.payload;
    },
    nowPlayingVideoId(state, action) {
      state.nowPlayingVideoId = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addNowPlayingTrailer,
  addTopRated,
  addPopular,
  addUpcoming,
  addRecommendedMovies,
  nowPlayingVideoId,
} = moviesSlice.actions;
export default moviesSlice.reducer;
