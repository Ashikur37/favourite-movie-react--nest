import { TextField } from "@mui/material";

type Props = {
  name: string;
  label: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export default function TextInput({ handleChange, name, label }: Props) {
  return (
    <TextField
      type="text"
      margin="normal"
      required
      fullWidth
      id={name}
      label={label}
      name={name}
      autoFocus
      onChange={handleChange}
    />
  );
}
