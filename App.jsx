import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Cart from './components/Cart'

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart([...cart, item])
  }

  return (
    <>
      <Header cart={cart} />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <main>
              <About />
              <Menu addToCart={addToCart} />
            </main>
          </>
        } />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
