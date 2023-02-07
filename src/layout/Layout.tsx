import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()
function Layout() {
  return (
    <div className="pl-[240px]">
      <SideBar />
      <div className="py-5 px-5">
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </div>
    </div>
  )
}

export default Layout
