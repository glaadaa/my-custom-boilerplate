import { useEffect, useState } from "react";
import axios from "axios";
import Product, { IProduct } from "../components/Product";
import { useQuery } from "@tanstack/react-query";

function FetchWithUseEffect() {
  const { status, error, data }: { status: any; error: any; data: any } =
    useQuery({});
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setLoading(false);
      setProducts(response.data);
    } catch (error: any) {
      setLoading(false);
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
      {products.map((item: IProduct, index: number) => {
        return <Product product={item} key={index} />;
      })}
    </div>
  );
}

export default FetchWithUseEffect;
