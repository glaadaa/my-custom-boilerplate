import { useRecoilState } from 'recoil'
import { CartState } from '../globalStates'

function Cart() {
  const [cart, setCart] = useRecoilState(CartState)
  const change = () => {
    setCart({
      id: 1,
      userId: 2,
      date: '2023-02-13',
      products: [],
    })
  }
  return (
    <div className="fixed right-0 top-0 h-[100vh] overflow-y-auto w-[300px] border border-r border-zinc-200 px-5 py-5 bg-white">
      <h3 className="text-lg text-black font-bold uppercase">Your cart</h3>
      {JSON.stringify(cart)}
      <button onClick={() => change()}>Change</button>
    </div>
  )
}

export default Cart
