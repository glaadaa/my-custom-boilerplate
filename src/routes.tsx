import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import FetchWithUseEffect from "./pages/FetchWithUseEffect";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/fetch-with-useEffect",
        element: <FetchWithUseEffect />,
      },
    ],
  },
]);

export default route;
