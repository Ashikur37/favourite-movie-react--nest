import FavoriteIcon from "@mui/icons-material/Favorite";
import { favourite } from "../../../services/movieService";
import { Grid, Paper, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { movieData } from "../../../types";
import { createAlert } from "../../../slices/authSlice";
import { fetchMovies } from "../../../slices/movieSlice";

import { useAppDispatch } from "../../../app/hooks";
import styles from "./MovieCard.module.css";

type Props = {
  movie: movieData;
};
export default function MovieCard({ movie }: Props) {
  const [isFavorite, setIsFavorite] = useState(movie.favourite);
  const dispatch = useAppDispatch();
  const handleFavorite = () => {
    favourite(movie.id).then((res: any) => {
      dispatch(fetchMovies());
      setIsFavorite(res.data.favourite);
      dispatch(
        createAlert({
          type: "success",
          message: res.data.msg,
        })
      );
    });
  };
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Paper elevation={3} className={styles.card}>
        <Box
          className={styles.box}
          sx={{
            backgroundImage: `url(${movie.posterUrl}),url(https://assignments.ds106.us/wp-content/uploads/sites/4/2017/09/movie_test_00-350x283.jpg)`,
          }}
        >
          <Box className={styles.boxContent}>
            <FavoriteIcon
              className={styles.favoriteIcon}
              onClick={handleFavorite}
              fontSize="large"
              sx={{
                color: isFavorite ? "red" : "white",
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            paddingX: 1,
          }}
        >
          <Typography
            variant="subtitle1"
            component="h2"
            sx={{
              marginTop: "3px",
            }}
          >
            {movie.title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="body2" component="p">
              Released In {movie.year}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              variant="subtitle2"
              component="p"
              sx={{ fontWeight: "bold" }}
            >
              {movie.category}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            marginTop={1}
          >
            <Rating
              name="size-small"
              size="small"
              defaultValue={movie.rating}
              precision={0.25}
              readOnly
            />
            <Typography variant="body2" component="p">
              ({movie.rating})
            </Typography>
          </Box>

          {/* <Box
            sx={{
              display: "flex",
            }}
          >
            <Typography variant="h6" component="h2" marginTop={0}>
              {movie.title}
            </Typography>
          </Box> */}
        </Box>
      </Paper>
    </Grid>
  );
}
