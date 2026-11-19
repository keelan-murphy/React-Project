import ProductList from './components/ProductList.jsx'
import Cart from './components/Cart.jsx'
import Statistics from './components/Statistics.jsx'

// Required component tree from the brief:
// App → ProductList → Product
//     → Cart
//     → Statistics
function App() {
  return (
    <div className="app">
      <h1>Shopping Cart App</h1>
      <ProductList />
      <Cart />
      <Statistics />
    </div>
  )
}

export default App
