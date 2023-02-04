import axios from "axios";
import Product, { IProduct } from "../components/Product";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../service";

function FetchWithUseQuery() {
  const {
    error,
    data,
    isLoading,
  }: { status: any; error: any; data: any; isLoading: boolean } = useQuery({
    queryKey: ["fetchPosts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60,
  });

  if (error) return <div>{error.message}</div>;

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <div>
      {data.map((item: IProduct, index: number) => {
        return <Product product={item} key={index} />;
      })}
    </div>
  );
}

export default FetchWithUseQuery;
