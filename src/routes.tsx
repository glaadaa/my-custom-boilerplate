import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import FetchWithUseEffect from "./pages/FetchWithUseEffect";
import FetchWithUseQuery from "./pages/FetchWithUseQuery";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/fetch-with-useEffect",
        element: <FetchWithUseEffect />,
      },
      {
        path: "/fetch-with-useQuery",
        element: <FetchWithUseQuery />,
      },
    ],
  },
]);

export default route;
