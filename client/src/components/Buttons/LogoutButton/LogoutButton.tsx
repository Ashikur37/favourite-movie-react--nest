import { forceLogout } from "../../../slices/authSlice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { Button } from "@mui/material";
import styles from "./LgoutButton.module.css";
const LogoutButton = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(forceLogout(null));
    navigate("/signin");
  };
  return (
    <Button
      className={styles.btn}
      size="large"
      variant="contained"
      onClick={logout}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
