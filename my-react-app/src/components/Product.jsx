// Product — one reusable card. Receives its data via props.
// Exam tip: props are how a parent passes data down to a child.
function Product({ product }) {
  const { name, price, category, image } = product

  function handleAddToCart() {
    // Cart wiring comes in requirement 3 (CartContext).
    // For now the button exists so the catalogue meets requirement 1.
    console.log(`Add to cart: ${name}`)
  }

  return (
    <article className="product-card">
      <img className="product-image" src={image} alt={name} />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">€{price}</p>
      <p className="product-category">{category}</p>
      <button type="button" className="btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </article>
  )
}

export default Product
