import * as React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { signinData } from "../../types";
import {
  Link as URL,
  Box,
  Paper,
  Typography,
  Grid,
  Avatar,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import EmailInput from "../../components/Inputs/EmailInput/EmailInput";
import PasswordInput from "../../components/Inputs/PasswordInput/PasswordInput";
import Loader from "../../components/Loader/Loader";
import SubmitButton from "../../components/Buttons/SubmitButton/SubmitButton";
import SnackBar from "../../components/SnackBar/SnackBar";
import { useAppDispatch } from "../../app/hooks";
import { loginUser } from "../../slices/authSlice";
import { useSelector } from "react-redux";
export default function SignIn() {
  const [signinData, setSigninData] = React.useState<signinData>({
    email: "",
    password: "",
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state: any) => state.auth);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    dispatch(loginUser(signinData));
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSigninData({
      ...signinData,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    setLoading(false);
    if (auth.loginStatus == "success") {
      navigate("/");
    }
  }, [auth, navigate]);

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            "url(https://as01.epimg.net/meristation_en/imagenes/2022/04/07/news/1649303165_427586_1649303260_sumario_normal.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          // backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <EmailInput
              name="email"
              handleChange={handleChange}
              label="Email Address"
            />
            <PasswordInput
              name="password"
              handleChange={handleChange}
              label="Password"
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            {loading ? <Loader /> : <SubmitButton label="Sign In" />}
            <Grid container>
              <Grid item xs>
                <URL variant="body2">Forgot password?</URL>
              </Grid>
              <Grid item>
                <Link to="/signup">Don't have an account? Sign Up</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
      <SnackBar
        open={errorMessage !== ""}
        message={errorMessage}
        handleClose={() => setErrorMessage("")}
        variant="error"
      />
    </Grid>
  );
}
