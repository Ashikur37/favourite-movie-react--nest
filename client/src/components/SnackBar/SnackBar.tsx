import { Alert, AlertColor, Snackbar } from "@mui/material";

type Props = {
  open: boolean;
  message: string;
  handleClose: () => void;
  variant: AlertColor;
};

export default function SnackBar({
  open,
  message,
  handleClose,
  variant,
}: Props) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      key={"error"}
    >
      <Alert severity={variant} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
