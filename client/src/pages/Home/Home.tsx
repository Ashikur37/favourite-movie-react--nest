import { useEffect, useState } from "react";
import { getMovie } from "../../services/movieService";
import { forceLogout } from "../../slices/authSlice";
import { useAppDispatch } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import { Grid, Paper, Typography } from "@mui/material";
import { movieData } from "../../types";
import MovieCard from "../../components/Card/MovieCard/MovieCard";
type Props = {};

export default function Home({}: Props) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [movies, setMovies] = useState<movieData[]>([]);
  useEffect(() => {
    getMovie()
      .then((res: any) => {
        setMovies(res.data);
      })
      .catch((err: any) => {
        if (err.response.status == 401) {
          dispatch(forceLogout(null));
          navigate("/signin");
        }
      });
  });
  return (
    <Grid container component="main">
      <Grid item xs={false} sm={4} md={3}>
        <Paper>
          <Typography variant="h5" component="h3">
            Home
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={false} sm={4} md={9}>
        <Grid container component="main">
          {movies.map((movie: movieData) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
