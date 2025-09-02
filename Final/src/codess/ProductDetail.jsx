import { useDispatch, useSelector } from 'react-redux'
import { selectById } from '../slices/productSlice'
import { addToCart } from '../slices/cartSlice'

export default function ProductDetail({ id, onBack }) {
  const product = useSelector(selectById(id))
  const dispatch = useDispatch()
  if (!product) return <div className="empty">Product not found.</div>

  return (
    <section className="card">
      <button className="btn" onClick={onBack}>← Back</button>
      <h2 style={{marginTop:10}}>{product.title}</h2>
      <div className="price">${product.price.toFixed(2)}</div>
      <p className="muted">{product.description}</p>
      <button className="btn primary" onClick={() => dispatch(addToCart(product))}>
        Add to Cart
      </button>
    </section>
  )
}
