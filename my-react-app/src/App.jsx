import './App.css'
import ProductList from './components/ProductList.jsx'
import Cart from './components/Cart.jsx'
import Statistics from './components/Statistics.jsx'

function App() {
  // Requirement 1: products stored in an array of objects
  // Tip from the brief: { name, price, category } is missing one important key
  // We add id so React can track each item (and so cart can find the right product later)
  const products = [
    { id: 1, name: "Laptop", price: 899, category: "Electronics", image: "/images/laptop.svg" },
    { id: 2, name: "Phone", price: 699, category: "Electronics", image: "/images/phone.svg" },
    { id: 3, name: "Headphones", price: 129, category: "Electronics", image: "/images/headphones.svg" },
    { id: 4, name: "Desk", price: 199, category: "Furniture", image: "/images/desk.svg" },
    { id: 5, name: "Chair", price: 149, category: "Furniture", image: "/images/chair.svg" },
    { id: 6, name: "Bookshelf", price: 89, category: "Furniture", image: "/images/bookshelf.svg" },
    { id: 7, name: "Novel", price: 14, category: "Books", image: "/images/novel.svg" },
    { id: 8, name: "Cookbook", price: 24, category: "Books", image: "/images/cookbook.svg" },
    { id: 9, name: "Textbook", price: 59, category: "Books", image: "/images/textbook.svg" },
  ]

  return (
    <div>
      <h1>Shopping Cart App</h1>

      {/* App → ProductList → Product */}
      <ProductList products={products} />

      <hr></hr>

      <Cart />

      <hr></hr>

      <Statistics />
    </div>
  )
}

export default App
