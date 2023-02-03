export interface IProduct {
  id: number;
  userId: number;
  title: string;
  body: string;
}
export default function Product({ product }: { product: IProduct }) {
  return (
    <div>
      <h3>{product.title}</h3>
    </div>
  );
}
