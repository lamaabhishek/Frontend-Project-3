import { useSelector, useDispatch } from 'react-redux'
import { selectCart, selectCartTotal, removeFromCart, updateQty, clearCart } from '../slices/cartSlice'

export default function Cart({ onGoCheckout }) {
  const items = useSelector(selectCart)
  const total = useSelector(selectCartTotal)
  const dispatch = useDispatch()

  if (items.length === 0) {
    return <div className="empty">Your cart is empty.</div>
  }

  return (
    <section className="card">
      <h2>Your Cart</h2>
      {items.map(i => (
        <div key={i.id} style={{display:'grid', gridTemplateColumns:'1fr 110px 110px', gap:8, alignItems:'center', margin:'8px 0'}}>
          <div><strong>{i.title}</strong><div className="muted">${i.price.toFixed(2)}</div></div>
          <input type="number" min="1" value={i.qty} onChange={(e)=>dispatch(updateQty({id:i.id, qty:e.target.value}))}/>
          <button className="btn" onClick={()=>dispatch(removeFromCart(i.id))}>Remove</button>
        </div>
      ))}
      <hr style={{borderColor:'#243041', margin:'12px 0'}} />
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <strong>Total: ${total}</strong>
        <div className="controls">
          <button className="btn" onClick={()=>dispatch(clearCart())}>Clear</button>
          <button className="btn primary" onClick={onGoCheckout}>Proceed to Checkout</button>
        </div>
      </div>
    </section>
  )
}
