import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  createTheme,
  Grid,
  Paper,
  Rating,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { movieData } from "../../../types";
const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
      ],
    },
  },
});
type Props = {
  movie: movieData;
};
export default function MovieCard({ movie }: Props) {
  return (
    <Grid item xs={6} md={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3} className="paper">
          {/* <img
            style={{
              width: "100%",
              height: "350px",
            }}
            src={movie.posterUrl}
            alt=""
            className="img"
          /> */}
          <Box
            sx={{
              height: "350px",
              backgroundImage: `url(${movie.posterUrl})`,
            }}
          >
            {/* Material heart icon */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                fontSize: "2rem",
                zIndex: 1,
              }}
            >
              <FavoriteIcon />
            </Box>
          </Box>
          <Box
            sx={{
              paddingX: 1,
            }}
          >
            <Typography variant="subtitle1" component="h2">
              {movie.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <FavoriteIcon />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                Released In {movie.year}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              marginTop={3}
            >
              <Rating
                name="size-small"
                size="small"
                defaultValue={movie.rating}
                precision={0.25}
                readOnly
              />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {movie.rating}
              </Typography>
              <Typography variant="body2" component="p" marginLeft={1.5}>
                {movie.category}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Typography variant="h6" component="h2" marginTop={0}>
                {movie.title}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
}
