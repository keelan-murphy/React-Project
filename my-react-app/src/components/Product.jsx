import './Product.css'

// Product component - like MemberCard from the lab
// props holds one product's data (name, price, category, image, id)
function Product(props) {
  console.log(props)

  return (
    <div className="product-card">
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <p>€{props.price}</p>
      <p>{props.category}</p>
      <button onClick={() => console.log("Add to cart:", props.name)}>
        Add to Cart
      </button>
    </div>
  )
}

export default Product
