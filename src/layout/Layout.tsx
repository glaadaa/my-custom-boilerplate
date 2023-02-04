import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
function Layout() {
  return (
    <div className="pl-[300px]">
      <SideBar />
      <div>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default Layout;
