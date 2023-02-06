import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import FetchWithUseEffect from "./pages/FetchWithUseEffect";
import FetchWithUseQuery from "./pages/FetchWithUseQuery";
import UseMemo from "./pages/UseMemo";
import StrictModeSample from "./pages/StrictMode";

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
      {
        path: "/use-memo",
        element: <UseMemo />,
      },
      {
        path: "/strict-mode",
        element: <StrictModeSample />,
      },
    ],
  },
]);

export default route;
