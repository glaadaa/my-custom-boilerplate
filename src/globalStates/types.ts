import { IProduct } from '../components/Product'
export type CartStateType = {
  id: number
  userId: number
  date: string
  products: IProduct[]
}
