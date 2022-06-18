import { setSearch, setPage } from "../../../slices/movieSlice";
import { useAppDispatch } from "../../../app/hooks";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./SearchInput.module.scss";

type Props = {};

const SearchInput = ({}: Props) => {
  const dispatch = useAppDispatch();
  const handleSearchChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(setSearch(e.target.value));
    dispatch(setPage(1));
  };
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        marginBottom: "20px",
      }}
    >
      <InputBase
        onChange={handleSearchChange}
        fullWidth
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Your Favourite..."
        inputProps={{ "aria-label": "search Movie" }}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchInput;
