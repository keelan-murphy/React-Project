import Product from './Product.jsx'

// ProductList receives the products array through props
// map() turns each product object into a <Product /> component
function ProductList(props) {
  return (
    <div>
      <h2>Products</h2>
      <div className="product-container">
        {props.products.map((product) => (
          // key must be unique - that is why each product has an id
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
            image={product.image}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductList
