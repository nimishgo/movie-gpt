import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    nowPlayingTrailer: null,
    topRated: null,
    popular: null,
    upcoming: null,
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
  },
});

export const {
  addNowPlayingMovies,
  addNowPlayingTrailer,
  addTopRated,
  addPopular,
  addUpcoming,
} = moviesSlice.actions;
export default moviesSlice.reducer;
