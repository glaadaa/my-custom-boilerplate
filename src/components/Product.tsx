export interface IProduct {
  id: number;
  title: string;
  body: string;
  description: string;
  price: number;
  discountPercentage: string;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
export default function Product({ product }: { product: IProduct }) {
  return (
    <div className="drop-shadow-lg border border-zinc-200 rounded-md overflow-hidden cursor-pointer">
      <div className="">
        <img src={product.thumbnail} className="aspect-[3/2] object-cover" />
      </div>
      <div className="p-2">
        <div className="flex flex-row justify-between">
          <h3>{product.title}</h3>
          <span className="">${product.price}</span>
        </div>
      </div>
    </div>
  );
}
