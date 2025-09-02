import { useSelector, useDispatch } from 'react-redux'
import { selectCart, selectCartTotal, clearCart } from '../slices/cartSlice'

export default function Checkout({ onDone }) {
  const items = useSelector(selectCart)
  const total = useSelector(selectCartTotal)
  const dispatch = useDispatch()

  if (items.length === 0) return <div className="empty">Add items before checkout.</div>

  const submit = (e) => {
    e.preventDefault()
    dispatch(clearCart())
    alert('Order placed successfully!')
    onDone()
  }

  return (
    <section className="grid" style={{gridTemplateColumns:'1fr 1fr'}}>
      <div className="card">
        <h3>Order Summary</h3>
        {items.map(i=>(
          <div key={i.id} style={{display:'flex', justifyContent:'space-between', margin:'6px 0'}}>
            <span>{i.title} × {i.qty}</span>
            <span>${(i.price*i.qty).toFixed(2)}</span>
          </div>
        ))}
        <hr style={{borderColor:'#243041', margin:'10px 0'}} />
        <div style={{display:'flex', justifyContent:'space-between'}}><strong>Total</strong><strong>${total}</strong></div>
      </div>
      <form className="card" onSubmit={submit}>
        <h3>Shipping & Payment</h3>
        <div>
          <label>Name</label>
          <input required placeholder="Your name" />
        </div>
        <div>
          <label>Address</label>
          <input required placeholder="Street, City, State" />
        </div>
        <div>
          <label>Card Number</label>
          <input required placeholder="1234 5678 9012 3456" />
        </div>
        <button className="btn primary" type="submit">Place Order</button>
      </form>
    </section>
  )
}
