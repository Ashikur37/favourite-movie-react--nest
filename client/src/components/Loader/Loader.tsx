import { Box, CircularProgress, Typography } from "@mui/material";
import styles from "./Loader.module.css";

type Props = {};

export default function Loader({}: Props) {
  return (
    <Box
      className={styles.loader}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <CircularProgress size={50} thickness={6} sx={{ mt: 3, mb: 2 }} />
    </Box>
  );
}
