import { Box, Grid, Paper, Typography } from "@mui/material";

import LogoutButton from "../Buttons/LogoutButton/LogoutButton";
import FavouriteType from "../Inputs/Radio/FavouriteType/FavouriteType";
import SelectPageLength from "../Inputs/Select/SelectPageLength/SelectPageLength";
import SelectSort from "../Inputs/Select/SelectSort/SelectSort";
import { useSelector } from "react-redux";
type Props = {};
const SideBar = ({}: Props) => {
  const authState = useSelector((state: any) => state.auth);
  const { user } = authState;
  return (
    <Grid item xs={false} sm={4} md={3}>
      <Box padding={2}>
        <Paper>
          <Typography variant="h5" component="h3">
            Hi {user.firstName} {user.lastName}
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
