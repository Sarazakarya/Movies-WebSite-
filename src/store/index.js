import { configureStore } from "@reduxjs/toolkit";
import MoviesSlice from "./Slices/Movies";

export const store = configureStore({
    reducer: {
        movies: MoviesSlice
    }
})