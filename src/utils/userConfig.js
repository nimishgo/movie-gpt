import { createSlice } from "@reduxjs/toolkit";

const userConfig = createSlice({
  name: "userConfig",
  initialState: {
    showSearch: false,
    showVideo: false,
  },
  reducers: {
    toggleShowSearch: (state) => {
      state.showSearch = !state.showSearch;
    },
    toggleShowVideo: (state) => {
      state.showVideo = !state.showVideo;
    },
  },
});

export const { toggleShowSearch, toggleShowVideo } = userConfig.actions;
export default userConfig.reducer;
