import { Box, Grid, Paper, Typography } from "@mui/material";

import LogoutButton from "../Buttons/LogoutButton/LogoutButton";
import FavouriteType from "../Inputs/Radio/FavouriteType/FavouriteType";
import SelectPageLength from "../Inputs/Select/SelectPageLength/SelectPageLength";
import SelectSort from "../Inputs/Select/SelectSort/SelectSort";
import { useSelector } from "react-redux";
import styles from "./SideBar.module.css";
type Props = {};
const SideBar = ({}: Props) => {
  const authState = useSelector((state: any) => state.auth);
  const { user } = authState;
  return (
    <Grid item xs={12} sm={5} md={4} lg={3}>
      <Box className={styles.sideBarBox}>
        <Paper
          sx={{
            padding: "1rem",
          }}
        >
          <Typography variant="h5" component="h3">
            Welcome {user.firstName} {user.lastName}
          </Typography>
        </Paper>
        <SelectSort />
        <SelectPageLength />
        <FavouriteType />
        <LogoutButton />
      </Box>
    </Grid>
  );
};

export default SideBar;
