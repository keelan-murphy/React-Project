import Product from './Product.jsx'
import { products } from '../data/products.js'

// ProductList — renders the catalogue with map().
// Exam tip: map() turns an array of data into an array of JSX elements.
// The `key` must be unique and stable — that is why every product has an id.
function ProductList() {
  return (
    <section className="panel">
      <h2>Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default ProductList
