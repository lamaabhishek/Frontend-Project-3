import { useState } from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Auth from './components/Auth'

import { useSelector } from 'react-redux'

export default function App() {
  const [page, setPage] = useState('products') // 'products' | 'detail' | 'cart' | 'checkout' | 'auth'
  const [selectedId, setSelectedId] = useState(null)
  const { isLoggedIn } = useSelector((s) => s.user)

  const goProductDetail = (id) => {
    setSelectedId(id)
    setPage('detail')
  }

  const goCheckout = () => {
    if (!isLoggedIn) setPage('auth')
    else setPage('checkout')
  }

  return (
    <div className="container">
      <Header
        page={page}
        onNav={(p) => setPage(p)}
        onGoCheckout={goCheckout}
      />
      <main>
        {page === 'products' && <ProductList onSelect={goProductDetail} />}
        {page === 'detail' && selectedId && (
          <ProductDetail id={selectedId} onBack={() => setPage('products')} />
        )}
        {page === 'cart' && <Cart onGoCheckout={goCheckout} />}
        {page === 'checkout' && <Checkout onDone={() => setPage('products')} />}
        {page === 'auth' && <Auth onSuccess={() => setPage('checkout')} />}
      </main>
    </div>
  )
}
