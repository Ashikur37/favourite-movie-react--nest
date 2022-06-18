import { Button } from "@mui/material";
import styles from "./SubmitButton.module.css";

type Props = {
  label: string;
};

export default function SubmitButton({ label }: Props) {
  return (
    <Button type="submit" fullWidth variant="contained" className={styles.btn}>
      {label}
    </Button>
  );
}
