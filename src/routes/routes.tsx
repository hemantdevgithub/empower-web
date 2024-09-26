import LoginPage from "@/pages/login";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routeGenerator } from "../utility/routeGenerator";
import { addPaths } from "./add.routes";
import { investorPaths } from "./investor.routes";
import { commonPaths } from "./common.routes";
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
  // add
  {
    path: "/",
    element: <App />,
    children: routeGenerator(addPaths),
  },
  // search
  {
    path: "/",
    element: <App />,
    children: routeGenerator(commonPaths),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/register",
    element: <div>Here will be register page</div>,
  },
]);

export default router;
