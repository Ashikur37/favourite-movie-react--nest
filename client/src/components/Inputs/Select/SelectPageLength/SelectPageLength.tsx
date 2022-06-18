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
import { setPageLength } from "../../../../slices/movieSlice";
import styles from "./SelectPageLength.module.scss";

const SelectPageLength = () => {
  const movieState = useSelector((state: any) => state.movies);
  const { pageLength } = movieState;
  const dispatch = useAppDispatch();
  return (
    <Paper
      sx={{
        marginTop: "1rem",
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="page-length-select-label">Page Length</InputLabel>
        <Select
          labelId="page-length-select-label"
          id="page-length-select"
          value={`${pageLength}`}
          label="Age"
          onChange={(e: SelectChangeEvent) => {
            dispatch(setPageLength(+e.target.value));
          }}
        >
          <MenuItem value="12">12</MenuItem>
          <MenuItem value="15">15</MenuItem>
          <MenuItem value="20">20</MenuItem>
        </Select>
      </FormControl>
    </Paper>
  );
};

export default SelectPageLength;
