import MovieCard from "../../components/Card/MovieCard/MovieCard";
import SearchInput from "../../components/Inputs/SearchInput/SearchInput";
import { Box, Grid, Pagination, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { movieData } from "../../types";
import styles from "./MovieGrid.module.css";
import { useAppDispatch } from "../../app/hooks";
import { setPage } from "../../slices/movieSlice";
import Loader from "../Loader/Loader";

const MovieGrid = () => {
  const movieState = useSelector((state: any) => state.movies);
  const { movies, count, pageLength, page, loading } = movieState;
  const dispatch = useAppDispatch();
  return (
    <Grid item xs={12} sm={7} md={8} lg={9}>
      <SearchInput />
      {loading ? <Loader /> : <> </>}
      <Grid
        container
        component="main"
        spacing={1.5}
        className={styles.movieGrid}
      >
        {movies.map((movie: movieData) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </Grid>

      <Stack spacing={2}>
        <Box className={styles.pagination}>
          <Pagination
            defaultValue={page}
            onChange={(e, p) => {
              dispatch(setPage(p));
            }}
            count={Math.ceil(count / pageLength)}
            color="primary"
          />
        </Box>
      </Stack>
    </Grid>
  );
};

export default MovieGrid;
