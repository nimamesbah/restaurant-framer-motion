import { createBrowserRouter } from "react-router";
import Layout from "./layout";
import Home from "./features/Home/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
export default router;
