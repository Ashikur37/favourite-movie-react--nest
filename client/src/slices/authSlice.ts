import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import bearerToken from "../helpers/bearerToken";
import { signup, signin, geCurrenttUser } from "../services/userService";
import { signinData, signupData } from "../types";
const initialState = {
  token: localStorage.getItem("token"),
  name: "",
  email: "",
  _id: "",
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  userLoaded: false,
  isLoggedIn: false,
  user: {
    firstName: "",
    lastName: "",
    email: "",
  },
  alert: {
    type: "success",
    message: "",
    show: false,
  },
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (values: signupData, { rejectWithValue }) => {
    try {
      const res = await signup(values);
      return res.data;
    } catch (err: any | AxiosError) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (values: signinData, { rejectWithValue }) => {
    try {
      const res = await signin(values);
      return res.data;
    } catch (err: any | AxiosError) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getUser = createAsyncThunk(
  "auth/getUser",
  async (values, { rejectWithValue }) => {
    geCurrenttUser()
      .then((res: any) => {
        return res.data;
      })
      .catch((err: any) => {
        return rejectWithValue(err.response.data);
      });
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUser(state, action) {
      const user = state.user;

      if (user) {
        return {
          ...state,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,

          userLoaded: true,
        };
      } else return { ...state, userLoaded: true };
    },
    removeAlert(state, action) {
      console.log("called");
      return {
        ...state,
        registerStatus: "",
        alert: {
          type: "success",
          message: "",
          show: false,
        },
      };
    },
    logoutUser(state, action) {
      localStorage.removeItem("token");

      return {
        ...state,
        token: "",
        name: "",
        email: "",
        _id: "",
        registerStatus: "",
        registerError: "",
        loginStatus: "",
        loginError: "",
      };
    },
    forceLogout(state, action) {
      localStorage.removeItem("token");

      return {
        ...state,
        token: "",
        name: "",
        email: "",
        _id: "",
        registerStatus: "",
        registerError: "",
        loginStatus: "",
        loginError: "",
        alert: {
          type: "error",
          message: "Please login to continue",
          show: true,
        },
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      console.log(action);
      return { ...state, registerStatus: "pending" };
    });
    builder.addCase(
      registerUser.fulfilled,
      (state, action: PayloadAction<any>) => {
        if (action.payload) {
          const user = action.payload;
          return {
            ...state,
            registerStatus: "success",
            alert: {
              type: "success",
              message: "Registration successful",
              show: true,
            },
          };
        } else return state;
      }
    );
    builder.addCase(
      registerUser.rejected,
      (state, action: PayloadAction<any>) => {
        console.log("rejected");
        console.log(action.payload);
        return {
          ...state,
          registerStatus: "rejected",
          registerError: action.payload,
          alert: {
            type: "error",
            message: action.payload.message,
            show: true,
          },
        };
      }
    );
    builder.addCase(loginUser.pending, (state, action) => {
      return { ...state, loginStatus: "pending" };
    });
    builder.addCase(
      loginUser.fulfilled,
      (state, action: PayloadAction<any>) => {
        if (action.payload) {
          const user = action.payload;
          bearerToken.set(user.access_token);
          return {
            ...state,
            token: action.payload.access_token,
            //   name: user.name,
            //   email: user.email,
            //   _id: user._id,
            isLoggedIn: true,
            loginStatus: "success",
            alert: {
              type: "success",
              message: "Login successful",
              show: true,
            },
          };
        } else return state;
      }
    );
    builder.addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
      return {
        ...state,
        loginStatus: "rejected",
        loginError: action.payload,
        alert: {
          type: "error",
          message: action.payload.message,
          show: true,
        },
      };
    });
    // builder.addCase(getUser.pending, (state, action) => {
    //   return {
    //     ...state,
    //     getUserStatus: "pending",
    //   };
    // });
    // builder.addCase(getUser.fulfilled, (state, action: PayloadAction<any>) => {
    //   if (action.payload) {
    //     const user = action.payload;
    //     return {
    //       ...state,
    //       token: action.payload,
    //       name: user.name,
    //       email: user.email,
    //       _id: user._id,
    //       getUserStatus: "success",
    //     };
    //   } else return state;
    // });
    // builder.addCase(getUser.rejected, (state, action: PayloadAction<any>) => {
    //   return {
    //     ...state,
    //     getUserStatus: "rejected",
    //     getUserError: action.payload,
    //   };
    // });
  },
});

export const { loadUser, logoutUser, forceLogout, removeAlert } =
  authSlice.actions;

export default authSlice.reducer;
