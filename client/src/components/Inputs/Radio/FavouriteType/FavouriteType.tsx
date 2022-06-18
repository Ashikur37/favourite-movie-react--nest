import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../app/hooks";
import { setPage, setFavourite } from "../../../../slices/movieSlice";
import styles from "./FavouriteType.module.css";

const FavouriteType = () => {
  const movieState = useSelector((state: any) => state.movies);
  const { favourite } = movieState;
  const dispatch = useAppDispatch();
  return (
    <Paper className={styles.paper}>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Show</FormLabel>
        <RadioGroup
          onChange={(e) => {
            dispatch(setPage(1));

            dispatch(setFavourite(e.target.value));
          }}
          aria-labelledby="demo-radio-buttons-group-label"
          value={favourite}
          name="radio-buttons-group"
        >
          <FormControlLabel value="all" control={<Radio />} label="All" />
          <FormControlLabel
            value="true"
            control={<Radio />}
            label="Favourite"
          />
          <FormControlLabel
            value="false"
            control={<Radio />}
            label="Not favourite"
          />
        </RadioGroup>
      </FormControl>
    </Paper>
  );
};
export default FavouriteType;
