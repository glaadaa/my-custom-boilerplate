import { useEffect, useState } from "react";
import { IProduct } from "../components/Product";
import ProductList from "../components/ProductList";
import { fetchProducts } from "../service";

function FetchWithUseEffect() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  const fetchData = async () => {
    try {
      const products: IProduct[] = await fetchProducts();
      setLoading(false);
      setProducts(products);
    } catch (error: any) {
      setLoading(false);
      setError(error);
    }
  };
  useEffect(() => {
    console.log("mounted");
    fetchData();
  }, []);

  if (error) return <div>{error.message}</div>;

  if (loading) return <h3>Loading...</h3>;

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}

export default FetchWithUseEffect;
