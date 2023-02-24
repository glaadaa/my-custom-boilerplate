import { atom } from 'recoil'
import { CartStateType } from './types'

const InitialCartState: CartStateType = {
  id: 0,
  userId: 0,
  date: '',
  products: [],
}

export const CartState = atom({
  key: 'CartState',
  default: InitialCartState,
})
