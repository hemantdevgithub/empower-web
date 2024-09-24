import { createBrowserRouter } from "react-router-dom";
import { investorPaths } from "./investor.routes";
import App from "../App";
import { routeGenerator } from "../utility/routeGenerator";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/investor",
    element: <App />,
    children: routeGenerator(investorPaths),
  },

  {
    path: "/login",
    element: <div>Here will be login page</div>,
  },

  {
    path: "/register",
    element: <div>Here will be register page</div>,
  },
]);

export default router;
