import { useState, useEffect, useRef } from 'react'
import { fetchData } from '../service'

function UseCategory() {
  const isMounted = useRef<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [data, setData] = useState<string[]>([])
  const [error, setError] = useState<any>(null)
  const getCategories = async () => {
    isMounted.current = true
    setIsLoading(true)
    try {
      const response = await fetchData('/products/categories')
      setData(response)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      setError(error)
    }
  }
  useEffect(() => {
    if (isMounted.current) return
    getCategories()
  }, [])
  return { data, isLoading, error }
}

export default UseCategory
