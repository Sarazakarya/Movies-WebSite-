import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';



// Get Movies
export const getAllMovies = createAsyncThunk('movies/getAllMovies', async (_, thunkApi) => {
    try {
        const data = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=21658c81f997bf378a9f606ab270f9a7');
        return data.data.results;
    }
    catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});


// Search
export const getsearch = createAsyncThunk('movies/getsearch', async (word, thunkApi) => {
    try {
        if (word === '') {
            const response = await thunkApi.dispatch(getAllMovies());
            return response.payload;
        }
        else {
            const data = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${word}&api_key=21658c81f997bf378a9f606ab270f9a7`);
            return data.data.results;
        }
    }
    catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});


// Get Page
export const getPage = createAsyncThunk('movies/getPage', async (page, thunkApi) => {
    try {
        const data = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=21658c81f997bf378a9f606ab270f9a7&language=ar&page=${page}`);
        return data.data.results;
    }
    catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});



export const MoviesSlice = createSlice({
    name: "movies",
    initialState: { movies: [], error: null, isLoading: false },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAllMovies.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getAllMovies.fulfilled, (state, action) => {
                state.isLoading = false;
                state.movies = action.payload;
                state.error = null;
            })
            .addCase(getAllMovies.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(getsearch.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getsearch.fulfilled, (state, action) => {
                state.isLoading = false;
                state.movies = action.payload;
                state.error = null;
            })
            .addCase(getsearch.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            }).addCase(getPage.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getPage.fulfilled, (state, action) => {
                state.isLoading = false;
                state.movies = action.payload;
                state.error = null;
            })
            .addCase(getPage.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export default MoviesSlice.reducer;
