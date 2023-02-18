import SideBar from './SideBar'
import Cart from './Cart'
import { Outlet } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()
function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="pl-[240px] pr-[300px]">
        <SideBar />
        <Cart />
        <div className="py-10 px-10">
          <Outlet />
        </div>
      </div>
    </QueryClientProvider>
  )
}

export default Layout
