import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { getMovie } from "../services/movieService";
import { forceLogout } from "./authSlice";
const initialState = {
  movies: [],
  search: "",
  favourite: "all",
  loading: false,
  count: 0,
  pageLength: 12,
  page: 1,
  sortBy: "title&type=asc",
  loggedIn: true,
};

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (arg, { getState, rejectWithValue, dispatch }) => {
    const state: any = getState();

    const { search, sortBy, favourite, page, pageLength } = state.movies;
    try {
      const res = await getMovie(search, sortBy, favourite, page, pageLength);
      return res.data;
    } catch (err: any | AxiosError) {
      dispatch(forceLogout(null));
      return rejectWithValue(err.response.data);
    }
    //   .then((res: any) => {
    //     // dispatch(setMovies(res.data.movies));
    //     // dispatch(setCount(res.data.count));
    //   })
    //   .catch((err: any) => {
    //     if (err.response.status == 401) {
    //     //   dispatch(forceLogout(null));
    //     //   navigate("/signin");
    //     }
    //   });
  }
);

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        search: action.payload,
      };
    },
    setMovies: (state, action: PayloadAction<[]>) => {
      return {
        ...state,
        movies: action.payload,
      };
    },
    setFavourite: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        favourite: action.payload,
      };
    },
    setCount: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        count: action.payload,
      };
    },
    setPageLength: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        pageLength: action.payload,
      };
    },
    setPage: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        page: action.payload,
      };
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        sortBy: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state, action) => {
      console.log(action);
      return { ...state, loading: true };
    });
    builder.addCase(
      fetchMovies.fulfilled,
      (state, action: PayloadAction<any>) => {
        if (action.payload) {
          const result = action.payload;
          return {
            ...state,
            loading: false,
            movies: result.movies,
            count: result.count,
            loggedIn: true,
          };
        } else return state;
      }
    );
    builder.addCase(
      fetchMovies.rejected,
      (state, action: PayloadAction<any>) => {
        return {
          ...state,
          loggedIn: false,
        };
      }
    );
  },
});

export const {
  setSearch,
  setMovies,
  setFavourite,
  setCount,
  setPageLength,
  setPage,
  setSortBy,
} = movieSlice.actions;
export default movieSlice.reducer;
