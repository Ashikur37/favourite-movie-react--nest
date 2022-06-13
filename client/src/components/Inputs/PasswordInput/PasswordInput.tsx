import { TextField } from "@mui/material";

type Props = {
  name: string;
  label: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export default function PasswordInput({ handleChange, name, label }: Props) {
  return (
    <TextField
      type="password"
      margin="normal"
      required
      fullWidth
      id={name}
      label={label}
      name={name}
      autoComplete="email"
      autoFocus
      onChange={handleChange}
    />
  );
}
