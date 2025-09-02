import { useSelector } from 'react-redux'
import { selectCart } from '../slices/cartSlice'

export default function Header({ page, onNav, onGoCheckout }) {
  const items = useSelector(selectCart)
  const count = items.reduce((n, i) => n + i.qty, 0)

  return (
    <header>
      <h2>E-Shop</h2>
      <nav className="nav">
        <button className="btn" onClick={() => onNav('products')}>Products</button>
        <button className="btn" onClick={() => onNav('cart')}>Cart ({count})</button>
        <button className="btn primary" onClick={onGoCheckout}>Checkout</button>
      </nav>
    </header>
  )
}
