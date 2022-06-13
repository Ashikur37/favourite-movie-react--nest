import { Box, CircularProgress } from "@mui/material";

type Props = {};

export default function Loader({}: Props) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress sx={{ mt: 3, mb: 2 }} />
    </Box>
  );
}
