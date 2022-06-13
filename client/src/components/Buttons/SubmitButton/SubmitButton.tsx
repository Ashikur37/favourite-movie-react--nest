import { Button } from "@mui/material";

type Props = {
  label: string;
};

export default function SubmitButton({ label }: Props) {
  return (
    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
      {label}
    </Button>
  );
}
