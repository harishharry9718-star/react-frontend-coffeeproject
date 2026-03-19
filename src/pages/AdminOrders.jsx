import axios from "axios";
import { useEffect, useState } from "react";
import { Badge, Card, Container, Form, Table } from "react-bootstrap";
// import "./AdminOrders.css";

export default function AdminOrders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://coffee-backend-0pn1.onrender.com/api/orders/all")
      .then(res => setOrders(res.data))
      .catch(() => console.log("load orders error"));
  }, []);

  const updateStatus = (id, status) => {
    axios.put(
      `http://coffee-backend-0pn1.onrender.com/api/orders/status/${id}`,
      `"${status}"`,
      { headers: { "Content-Type": "application/json" } }
    ).then(() => {
      setOrders(prev =>
        prev.map(o => o.id === id ? { ...o, status } : o)
      );
    });
  };

  const statusVariant = (status) => {
    switch (status) {
      case "PLACED": return "secondary";
      case "CONFIRMED": return "info";
      case "PREPARING": return "warning";
      case "READY": return "primary";
      case "COMPLETED": return "success";
      case "CANCELLED": return "danger";
      default: return "dark";
    }
  };

  return (
    <div className="admin-bg">
      <Container className="pt-5 mt-5">
        <Card className="admin-card">
          <Card.Body>
            <h2 className="admin-title">📦 Customer Orders</h2>

            <Table responsive hover className="admin-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Customer</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Total</th>
                  <th>Items</th>
                  <th>Status</th>
                  <th>Update</th>
                </tr>
              </thead>

              <tbody>
                {orders.map(o => (
                  <tr key={o.id}>
                    <td className="fw-bold">{o.id}</td>
                    <td>{o.customerName}</td>
                    <td>{o.phone}</td>
                    <td className="address">{o.address}</td>

                    <td className="total">
                      ₹ {o.totalAmount}
                    </td>

                    <td className="items">
                      {JSON.parse(o.itemsJson).map(i => (
                        <span key={i.id}>• {i.name}<br /></span>
                      ))}
                    </td>

                    <td>
                      <Badge bg={statusVariant(o.status)} className="status-badge">
                        {o.status}
                      </Badge>
                    </td>

                    <td>
                      <Form.Select
                        className="status-select"
                        value={o.status}
                        onChange={(e) => updateStatus(o.id, e.target.value)}
                      >
                        <option value="PLACED">PLACED</option>
                        <option value="CONFIRMED">CONFIRMED</option>
                        <option value="PREPARING">PREPARING</option>
                        <option value="READY">READY</option>
                        <option value="COMPLETED">COMPLETED</option>
                        <option value="CANCELLED">CANCELLED</option>
                      </Form.Select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
