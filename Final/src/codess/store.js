import { configureStore } from '@reduxjs/toolkit'
import products from './slices/productSlice'
import cart from './slices/cartSlice'
import user from './slices/userSlice'

const store = configureStore({
  reducer: { products, cart, user }
})

export default store
