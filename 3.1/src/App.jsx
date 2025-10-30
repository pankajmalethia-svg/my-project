// src/App.jsx
import React from "react";

function ProductCard({ name, price, inStock, description }) {
  return (
    <div style={{
      border: "1px solid grey",   // changed border to grey
      borderRadius: "10px",
      padding: "24px",
      margin: "10px",
      width: "250px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "#fff",
      color: "black"
    }}>
      <h2 style={{ marginBottom: "12px", fontWeight: "bold", fontSize: "1.3em" }}>
        {name}
      </h2>
      <p style={{ marginBottom: "8px", fontSize: "1.1em" }}>Price: ${price}</p>
      <p style={{ marginBottom: "8px", fontStyle: "italic", fontSize: "0.95em" }}>
        {description}
      </p>
      <p style={{ fontSize: "1.05em", color: "black" }}>
        Status: {inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
}

function App() {
  return (
    <div style={{
      border: "2px solid black",
      borderRadius: "8px",
      padding: "28px 16px 24px 16px",
      maxWidth: "920px",
      margin: "30px auto",
      background: "#fafafa",
      color: "black"
    }}>
      <h1 style={{
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: "20px",
        fontSize: "2em",
        color: "black"
      }}>Products List</h1>
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "32px"
      }}>
        <ProductCard
          name="Wireless Mouse"
          price={25.99}
          inStock={true}
        />
        <ProductCard
          name="Keyboard"
          price={45.5}
          inStock={false}
        />
        <ProductCard
          name="Monitor"
          price={199.99}
          inStock={true}
        />
      </div>
    </div>
  );
}

export default App;