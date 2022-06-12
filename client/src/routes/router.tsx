// import Login from '../Pages/Login';
// import Dashboard from '../Pages/Dashboard';
// import ProtectedRoute from '../Components/ProtectedRoute.jsx';
import Home from "../pages/Home/Home";
// import NotFound from "../Pages/NotFound";
import Signin from "../pages/Signin/Signin";

const routes = [
  {
    path: "/signin",
    element: (
      // <ProtectedRoute>
      <Signin />
      // {/* </ProtectedRoute>11 */}
    ),
  },
  {
    path: "/dashboard",
    element: <Home />,
  },
  //   {
  //     path: "/*",
  //     element: <NotFound />,
  //   },
];

export default routes;
