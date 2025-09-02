import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] }, // {id,title,price,qty}
  reducers: {
    addToCart: (state, { payload }) => {
      const found = state.items.find(i => i.id === payload.id)
      if (found) found.qty += 1
      else state.items.push({ ...payload, qty: 1 })
    },
    removeFromCart: (state, { payload: id }) => {
      state.items = state.items.filter(i => i.id !== id)
    },
    updateQty: (state, { payload: { id, qty } }) => {
      const found = state.items.find(i => i.id === id)
      if (found) found.qty = Math.max(1, Number(qty) || 1)
    },
    clearCart: (state) => { state.items = [] }
  }
})

export const { addToCart, removeFromCart, updateQty, clearCart } = cartSlice.actions
export const selectCart = (s) => s.cart.items
export const selectCartTotal = (s) => s.cart.items.reduce((sum, i) => sum + i.price * i.qty, 0).toFixed(2)
export default cartSlice.reducer
