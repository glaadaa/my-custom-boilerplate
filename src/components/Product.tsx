export interface IProduct {
  id: number
  title: string
  description: string
  price: number
  category: string
  image: string
}
export default function Product({ product }: { product: IProduct }) {
  return (
    <div className="drop-shadow-lg border border-zinc-200 rounded-md overflow-hidden cursor-pointer bg-white">
      <div className="p-5">
        <img
          src={product.image}
          className="aspect-[3/2] object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-2">
        <div className="flex flex-row justify-between">
          <h3>{product.title}</h3>
          <span className="">${product.price} asd</span>
        </div>
      </div>
    </div>
  )
}
