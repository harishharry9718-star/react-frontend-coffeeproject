import axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function OrderReport() {

  const [orders, setOrders] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:8085/api/orders/all")
      .then(res => {
        setOrders(res.data);
        setFiltered(res.data);

        const total = res.data.reduce(
          (sum, o) => sum + Number(o.totalAmount || 0),
          0
        );
        setTotalRevenue(total);
      })
      .catch(() => alert("Failed to load report"));
  }, []);

  const applyFilter = () => {

    const f = new Date(fromDate);
  f.setHours(0, 0, 0, 0);

  const t = new Date(toDate);
  t.setHours(23, 59, 59, 999); 

    const filteredOrders = orders.filter(o => {
      const d = new Date(o.orderDate);
      return d >= f && d <= t;
    });

    setFiltered(filteredOrders);

    const total = filteredOrders.reduce(
      (sum, o) => sum + Number(o.totalAmount || 0),
      0
    );

    setTotalRevenue(total);
  };

  return (
  <div className="container mt-5 pt-5">

    {/* Header */}
    <div className="mb-4 text-center">
      <h2 className="fw-bold"> Order Report</h2>
      <p className="text-muted">View orders and revenue by date range</p>
    </div>

    {/* Filter Card */}
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <div className="row g-3 align-items-end">

          <div className="col-md-4">
            <label className="form-label">From Date</label>
            <input
              type="date"
              className="form-control"
              value={fromDate}
              onChange={e => setFromDate(e.target.value)}
            />
          </div>

          <div className="col-md-4">
            <label className="form-label">To Date</label>
            <input
              type="date"
              className="form-control"
              value={toDate}
              onChange={e => setToDate(e.target.value)}
            />
          </div>

          <div className="col-md-4 d-grid">
            <button
              className="btn btn-primary"
              onClick={applyFilter}
            >
              🔍 Apply Filter
            </button>
          </div>

        </div>
      </div>
    </div>

    {/* Summary */}
    <div className="row mb-4 text-center">
      <div className="col-md-6 mb-3">
        <div className="card border-0 shadow-sm bg-light">
          <div className="card-body">
            <h5 className="text-muted">Total Orders</h5>
            <h3 className="fw-bold">{filtered.length}</h3>
          </div>
        </div>
      </div>

      <div className="col-md-6 mb-3">
        <div className="card border-0 shadow-sm bg-light">
          <div className="card-body">
            <h5 className="text-muted">Total Revenue</h5>
            <h3 className="fw-bold text-success">₹ {totalRevenue}</h3>
          </div>
        </div>
      </div>
    </div>

    {/* Orders Table */}
    <div className="card shadow-sm">
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-hover table-bordered align-middle text-center">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Phone</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length > 0 ? (
                filtered.map(o => (
                  <tr key={o.id}>
                    <td>{o.id}</td>
                    <td>{o.orderDate?.slice(0, 10)}</td>
                    <td>{o.customerName}</td>
                    <td>{o.phone}</td>
                    <td className="fw-bold text-success">₹ {o.totalAmount}</td>
                    <td>
                      <span className="badge bg-info">
                        {o.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-muted py-4">
                    No orders found for selected date range
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>

  </div>
);
}