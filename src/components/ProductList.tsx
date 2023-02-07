import Product, { IProduct } from './Product'
export default function ProductList({ products }: { products: IProduct[] }) {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 gap-5">
      {products.map((product: IProduct, index: number) => {
        return <Product product={product} key={index} />
      })}
    </div>
  )
}
