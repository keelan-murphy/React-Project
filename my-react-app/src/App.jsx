import React from "react";
import {createContext, useContext } from "react";

const UserContext=createContext();
//This creates a contect object//
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

export default function App() {
  const user = "Keelan";

  return (
    <UserContext.Provider value={user}>
    <div style={{ border: "2px solid black", padding: "10px" }}>
      <h1>Online Store ( for {user}!!)</h1>
      <Header user={user} />
    </div>
    </UserContext.Provider>
  );
}