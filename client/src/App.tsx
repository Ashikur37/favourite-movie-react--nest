import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SnackBar from "./components/SnackBar/SnackBar";
import Home from "./pages/Home/Home";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import { removeAlert } from "./slices/authSlice";
import { useAppDispatch } from "./app/hooks";
import { Box } from "@mui/material";
function App() {
  const auth = useSelector((state: any) => state.auth);
  const dispatch = useAppDispatch();
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <SnackBar
          open={auth.alert.show}
          message={auth.alert.message}
          handleClose={() => dispatch(removeAlert(null))}
          variant={auth.alert.type}
        />
      </BrowserRouter>
    </Box>
  );
}

export default App;
