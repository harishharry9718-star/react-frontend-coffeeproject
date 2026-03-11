import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OrderStatusSearch() {

  const [orderId, setOrderId] = useState("");
  const navigate = useNavigate();

  const handleCheck = () => {
    if (!orderId) {
      alert("Please enter Order ID");
      return;
    }
    navigate(`/order/${orderId}`);
  };

  return (
    <div style={{ 
      padding: 40,
      maxWidth: 400,
      margin: "80px auto",
      border: "1px solid #ccc",
      borderRadius: 8,
      textAlign: "center"
    }}>

      <h2 style={{ marginBottom: 20 }}>
        🔍 Check Order Status
      </h2>

      <input
        type="text"
        placeholder="Enter Order ID"
        value={orderId}
        onChange={e => setOrderId(e.target.value)}
        style={{
          width: "100%",
          padding: 10,
          fontSize: 16,
          marginBottom: 20
        }}
      />

      <button
        onClick={handleCheck}
        style={{
          width: "100%",
          padding: 10,
          fontSize: 16,
          cursor: "pointer"
        }}
      >
        Check Status
      </button>

    </div>
  );
}
