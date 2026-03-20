import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function OrderStatus() {

  const { id } = useParams();

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`https://coffee-backend-0pn1.onrender.com/api/orders/status/${id}`)
      .then(res => {
        setStatus(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Order not found");
        setLoading(false);
      });
  }, []);
  

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2 style={{color:"red"}}>{error}</h2>;

  return (
    <div style={{ padding: 40 }}>
      <h2>Order Status</h2>

      <h3>Order ID: {id}</h3>

      <h1>{status}</h1>
    </div>
  );
}
