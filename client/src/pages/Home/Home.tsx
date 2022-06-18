import { useEffect } from "react";
import { fetchMovies } from "../../slices/movieSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import styles from "./Home.module.css";

import MovieGrid from "../../components/MovieGrid/MovieGrid";
import SideBar from "../../components/SideBar/SideBar";
type Props = {};

export default function Home({}: Props) {
  const authState = useSelector((state: any) => state.auth);
  console.log(authState);
  const movieState = useSelector((state: any) => state.movies);
  const { search, movies, favourite, count, pageLength, page, sortBy } =
    movieState;
  const { isLoggedIn } = authState;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
    if (!isLoggedIn) {
      navigate("/signin");
    }
  }, [search, sortBy, favourite, page, pageLength, isLoggedIn]);
  return (
    <Grid container component="main" className={styles.container}>
      <SideBar />
      <MovieGrid />
    </Grid>
  );
}
