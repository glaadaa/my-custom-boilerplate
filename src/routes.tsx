import { createBrowserRouter } from 'react-router-dom'
import Layout from './layout/Layout'
import FetchWithUseQuery from './pages/FetchWithUseQuery'
import ProductDetail from './pages/ProductDetail'

const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <FetchWithUseQuery />,
      },
      {
        path: '/product/:id',
        element: <ProductDetail />,
      },
    ],
  },
])

export default route
