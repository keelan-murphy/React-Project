import React from "react";
import {createContext, useContext, useState } from "react";

const UserContext=createContext();
//This creates a context object//
// You can think of this as creating a new channel for holding and sharing data (across many components)

function UserGreeting() {
  const user=useContext(UserContext);
  return (
    <div style={{ border: "1px solid red", padding: "10px" }}>
      <h3>Welcome back, {user}!</h3>
    </div>
  );
}

function Navbar() {
  return (
    <div style={{ border: "1px solid blue", padding: "10px" }}>
      <h2>Navbar</h2>

      <p>Home | Products | Cart</p>

      <UserGreeting/>
    </div>
  );
}

function Header({ user }) {
  return (
    <div style={{ border: "1px solid green", padding: "10px" }}>
      <h2>Header</h2>
      <Navbar/>
    </div>
  );
}

// One product card. Same idea as MemberCard: props holds the notes for this one game.
function Product(props) {
  console.log(props);

  return (
    <div style={{ border: "1px solid black", padding: "10px", width: "200px" }}>
      <img src={props.image} alt={props.name} width="180" />
      <h3>{props.name}</h3>
      <p>€{props.price}</p>
      <p>{props.category}</p>
      <button onClick={() => console.log("Add to cart:", props.name)}>
        Add to Cart
      </button>
    </div>
  );
}

// Goes through the products box and makes one Product card for each game.
function ProductList(props) {
  const [search, setSearch] = useState("") // the text in the search box

  // Keep a game only if its name contains the search text
  const filteredProducts = props.products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <h2>Products</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {filteredProducts.map((product) => (
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
  );
}

function Cart() {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Cart is empty</p>
      <p><b>Total: €0</b></p>
    </div>
  );
}

function Statistics() {
  return (
    <div>
      <h2>Cart Statistics</h2>
      <p>Total Items: 0</p>
    </div>
  );
}

export default function App() {
  const user = "Keelan";

  // The box of games. Each object is one game.
  // id is the extra key the brief said was missing.
  const products = [
  { id: 1, name: "GTA VI", price: 80, category: "Open World", image: "/images/gta.jpg" },
  { id: 2, name: "Red Dead Redemption", price: 60, category: "Open World", image: "/images/rdr.jpg" },
  { id: 3, name: "Ghost of Tsushima", price: 45, category: "Open World", image: "/images/got.jpg" },
  { id: 4, name: "Resident Evil 8", price: 50, category: "Action", image: "/images/re8.jpg" },
  { id: 5, name: "Uncharted", price: 20, category: "Action", image: "/images/uncharted.jpg" },
  { id: 6, name: "Call of Duty", price: 70, category: "Action", image: "/images/cod.jpg" },
  { id: 7, name: "Fifa", price: 10, category: "Sports", image: "/images/fifa.jpg" },
  { id: 8, name: "Mario Kart", price: 60, category: "Sports", image: "/images/mk.jpg" },
  { id: 9, name: "Minecraft", price: 25, category: "Open World", image: "/images/mc.jpg" },
];

  return (
    <UserContext.Provider value={user}>
    <div style={{ border: "2px solid black", padding: "10px" }}>
      <h1>Online Store ( for {user}!!)</h1>
      <Header user={user} />

      <hr></hr>

      <ProductList products={products} />

      <hr></hr>

      <Cart />

      <hr></hr>

      <Statistics />
    </div>
    </UserContext.Provider>
  );
}