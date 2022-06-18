import {
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../app/hooks";
import { setSortBy } from "../../../../slices/movieSlice";
import styles from "./SelectSort.module.scss";

const SelectSort = () => {
  const movieState = useSelector((state: any) => state.movies);
  const { sortBy } = movieState;
  const dispatch = useAppDispatch();
  const changeSortBy = (event: SelectChangeEvent) => {
    dispatch(setSortBy(event.target.value));
  };
  return (
    <Paper
      sx={{
        marginTop: "1rem",
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortBy}
          label="Sort By"
          onChange={changeSortBy}
        >
          <MenuItem value="title&type=asc">Title Asc</MenuItem>
          <MenuItem value="title&type=desc">Title Desc</MenuItem>
          <MenuItem value="year&type=asc">Year Asc</MenuItem>
          <MenuItem value="year&type=desc">Year Desc</MenuItem>
          <MenuItem value="rating&type=asc">Rating Asc</MenuItem>
          <MenuItem value="rating&type=desc">Rating Desc</MenuItem>
        </Select>
      </FormControl>
    </Paper>
  );
};

export default SelectSort;
