import { useContext, useState } from "react";
import { MenuContext } from "../../context/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Checkout() {

  const { cartItem, menuItems, TotalCartAmount } = useContext(MenuContext);
  const total = TotalCartAmount();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    phone: "",
    address: ""
  });

const handlePlaceOrder = () => {

  if (!user.name || !user.phone || !user.address) {
    alert("Please fill all details");
    return;
  }

  const order = {
    customerName: user.name,
    phone: user.phone,
    address: user.address,
    totalAmount: total,
    itemsJson: JSON.stringify(
      menuItems.filter(m => cartItem[m.id] > 0)),
      status: "PLACED"

  };

  axios.post("http://localhost:8085/api/orders/place", order)
    .then((res) => {
      const orderId = res.data.id;
      alert("Order placed successfully. order ID: " + orderId);

        navigate("/invoice", {
         state: {
          orderId : orderId,
         items: menuItems.filter(m => (cartItem[m.id] || 0) > 0),
         cart: cartItem,
         total: total,
         user: user
  }
});

   })
//  .then((res) => {
//   alert("Order placed successfully");
//   const orderId = res.data.id;
//   navigate(`/order/${orderId}`);
// })

    .catch(() => alert("Order failed"));
};

return (
  <div style={{
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f5f5"
  }}>

    <div style={{
      width: "420px",
      background: "white",
      padding: "25px 30px",
      borderRadius: "12px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
    }}>

      <h2 style={{ textAlign: "center", marginBottom: 15 }}>Checkout</h2>
      <hr />

      <h4>User Details</h4>

      <input
        type="text"
        placeholder="Full Name"
        value={user.name}
        onChange={e => setUser({ ...user, name: e.target.value })}
        style={{ width: "100%", padding: 8, marginTop: 8, marginBottom: 10 }}
      />

      <input
        type="text"
        placeholder="Phone Number"
        value={user.phone}
        onChange={e => setUser({ ...user, phone: e.target.value })}
        style={{ width: "100%", padding: 8, marginBottom: 10 }}
      />

      <textarea
        placeholder="Address"
        value={user.address}
        onChange={e => setUser({ ...user, address: e.target.value })}
        style={{ width: "100%", padding: 8, minHeight: 70 }}
      />

      <h4 style={{ marginTop: 15 }}>Order Summary</h4>

      <div style={{ fontSize: 14, marginBottom: 10 }}>
        {menuItems.filter(m => cartItem[m.id] > 0).map(m => (
          <p key={m.id}>{m.name} × {cartItem[m.id]}</p>
        ))}
      </div>

      <h3 style={{ textAlign: "right" }}>Total : ₹ {total}</h3>

      <button
        onClick={handlePlaceOrder}
        style={{
          width: "100%",
          padding: "10px",
          background: "black",
          color: "white",
          border: "none",
          borderRadius: 6,
          marginTop: 10,
          cursor: "pointer"
        }}
      >
        Place Order & Generate Invoice
      </button>

    </div>
  </div>
);
}