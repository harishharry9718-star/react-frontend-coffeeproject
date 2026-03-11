import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { MenuContext } from "../../context/Context";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";


export default function Invoice() {

const now = new Date();
const dateString = now.toLocaleDateString();
const timeString = now.toLocaleTimeString();
const location = useLocation();
const { orderId } = location.state || {};
const { cartItem, menuItems, TotalCartAmount, clearCart } = useContext(MenuContext);

const total = TotalCartAmount();

const boughtItems = menuItems.filter(m => (cartItem[m.id] || 0) > 0);

const downloadPDF = () => {
  const element = document.getElementById("invoice");

  html2canvas(element).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    pdf.addImage(imgData, "PNG", 0, 0, 210, 0);
    pdf.save("invoice.pdf");

    clearCart();

    localStorage.removeItem("cart");
  });
};

  return (
    <div id="invoice" style={{ width: "70%", margin: "auto", padding: 30 }}>

      <h2 style={{ textAlign: "center" }}>🧾 Invoice</h2>
      <p style={{ textAlign: "center" }}>Order ID: {orderId}</p>
      <hr />

      <h3>Harry Cafe</h3>
      <p>Madurai, Tamil Nadu</p>
      <p>Phone: 9876543210</p>

      <hr />
<hr />

<p><strong>Date:</strong> {dateString}</p>
<p><strong>Time:</strong> {timeString}</p>

<hr />

      <h4>Purchased Items</h4>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {boughtItems.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{cartItem[item.id]}</td>
              <td>{item.price}</td>
              <td>{item.price * cartItem[item.id]}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 style={{ textAlign: "right" }}>
        Grand Total : ₹ {total}
      </h3>

<button onClick={downloadPDF}>
  Download PDF
</button>
    </div>
  );
}
