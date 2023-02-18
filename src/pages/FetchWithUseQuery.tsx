import ProductList from '../components/ProductList'
import { useQuery } from '@tanstack/react-query'
import { fetchData } from '../service'

function FetchWithUseQuery() {
  const {
    error,
    data,
    isLoading,
  }: { status: any; error: any; data: any; isLoading: boolean } = useQuery({
    queryKey: ['fetchPosts'],
    queryFn: async () => await fetchData('/products?limit=100'),
    staleTime: 1000 * 60 * 5,
  })
  if (error) return <div>{error.message}</div>

  if (isLoading) return <h3>Loading...</h3>

  return (
    <div className="">
      <ProductList products={data} />
    </div>
  )
}

export default FetchWithUseQuery
