import { createSlice } from '@reduxjs/toolkit'
import { PRODUCTS } from '../data/products'

const productsSlice = createSlice({
  name: 'products',
  initialState: { list: PRODUCTS },
  reducers: {}
})

export const selectProducts = (s) => s.products.list
export const selectById = (id) => (s) => s.products.list.find(p => p.id === id)
export default productsSlice.reducer
