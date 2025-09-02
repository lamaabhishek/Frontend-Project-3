import { useSelector, useDispatch } from 'react-redux'
import { selectProducts } from '../slices/productSlice'
import { addToCart } from '../slices/cartSlice'

export default function ProductList({ onSelect }) {
  const products = useSelector(selectProducts)
  const dispatch = useDispatch()

  return (
    <section>
      <h2>Products</h2>
      <div className="grid">
        {products.map(p => (
          <div className="card" key={p.id}>
            <div className="muted">#{p.id}</div>
            <h3>{p.title}</h3>
            <div className="price">${p.price.toFixed(2)}</div>
            <p className="muted">{p.description}</p>
            <div className="controls">
              <button className="btn" onClick={() => onSelect(p.id)}>View</button>
              <button className="btn primary" onClick={() => dispatch(addToCart(p))}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
