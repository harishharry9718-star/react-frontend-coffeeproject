import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { MenuContext } from "../../context/Context";

export default function Menu() {

  const [items, setItems] = useState([]);
  const { AddtoCart, cartItem } = useContext(MenuContext);
[]
  const [search, setSearch] = useState("");   // 🔍 search text

  useEffect(() => {
    axios.get("https://coffee-backend-0pn1.onrender.com/api/menu/all")
      .then(res => setItems(res.data))
      .catch(() => console.log("error loading menu"));
  }, []);

  // 🔎 Filter items based on search text
  const filteredItems = items.filter(m =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "40px 60px" }}>

      {/* Title Section */}
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <h1 style={{ fontSize: 45, letterSpacing: 2 }}>MENU ITEMS</h1>

        {/* 🔍 SEARCH INPUT */}
        <input
          type="text"
          placeholder="Search coffee or tea..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: 10,
            width: 350,
            borderRadius: 20,
            border: "1px solid gray",
            textAlign: "center",
            marginTop: 10
          }}
        />
      </div>

      {/* Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 25
        }}
      >
        {filteredItems.map((m) => (
          <div
            key={m.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              padding: 20,
              borderRadius: 15,
              border: "1px solid #ddd",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              background: "white"
            }}
          >
            <img
              src={m.imageUrl}
              alt={m.name}
              style={{
                width: 220,
                height: 150,
                objectFit: "cover",
                borderRadius: 10
              }}
            />

            <div style={{ flex: 1 }}>
              <h2 style={{ margin: 0 }}>{m.name}</h2>
              <p style={{ fontWeight: "bold" }}>{m.price} Rupees</p>

              <button
                onClick={() => AddtoCart(m.id)}
                style={{
                  padding: "8px 18px",
                  borderRadius: 10,
                  border: "none",
                  cursor: "pointer",
                  background: "black",
                  color: "white",
                  fontWeight: 600
                }}
              >
                Add to Cart {cartItem[m.id] ? `(${cartItem[m.id]})` : ""}
              </button>
            </div>
          </div>
        ))}

        {/* If nothing found */}
        {filteredItems.length === 0 && (
          <h3 style={{ gridColumn: "1 / -1", textAlign: "center" }}>
            ❌ No items found
          </h3>
        )}
      </div>
    </div>
  );
}
