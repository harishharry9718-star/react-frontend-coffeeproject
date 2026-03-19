import { useEffect, useState } from "react";
import axios from "axios";

export default function MenuList() {

  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    loadMenu();
  }, []);

  const loadMenu = () => {
    axios.get("https://coffee-backend-0pn1.onrender.com/api/menu/all")
      .then(res => setItems(res.data))
      .catch(() => console.log("error loading menu"));
  };

  const deleteItem = (id) => {
    if (!window.confirm("Delete this menu item?")) return;

    axios.delete(`https://coffee-backend-0pn1.onrender.com/api/menu/${id}`)
      .then(() => loadMenu())
      .catch(() => alert("Delete failed"));
  };

  const updateItem = () => {
    axios.put(`https://coffee-backend-0pn1.onrender.com/api/menu/update/${editItem.id}`, editItem)
      .then(() => {
        alert("Updated successfully");
        setEditItem(null);
        loadMenu();
      })
      .catch(() => alert("Update failed"));
  };

  return (
    <div style={{ padding: 40 }}>

      <h2>Menu Items</h2>

      {/* ===== EDIT SECTION ===== */}
      {editItem && (
        <div style={{
          border: "1px solid #ccc",
          padding: 20,
          marginBottom: 30,
          width: 300
        }}>
          <h3>Edit Item</h3>

          <input
            placeholder="Name"
            value={editItem.name}
            onChange={e => setEditItem({ ...editItem, name: e.target.value })}
            style={{ width: "100%", marginBottom: 10 }}
          />

          <input
            type="number"
            placeholder="Price"
            value={editItem.price}
            onChange={e => setEditItem({ ...editItem, price: e.target.value })}
            style={{ width: "100%", marginBottom: 10 }}
          />

          <input
            placeholder="Image URL"
            value={editItem.imageUrl}
            onChange={e => setEditItem({ ...editItem, imageUrl: e.target.value })}
            style={{ width: "100%", marginBottom: 10 }}
          />

          <button onClick={updateItem}>Save</button>
          <button onClick={() => setEditItem(null)} style={{ marginLeft: 10 }}>
            Cancel
          </button>
        </div>
      )}

      {/* ===== TABLE ===== */}
      <table border="1" width="100%" cellPadding="10">
        <thead style={{ background: "#f2f2f2" }}>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {items.map(m => (
            <tr key={m.id}>
              <td>{m.id}</td>

              <td>
                <img src={m.imageUrl} alt="" width="80" />
              </td>

              <td>{m.name}</td>

              <td>{m.price} Rs</td>

              <td>
                <button onClick={() => setEditItem(m)}>
                  Edit
                </button>

                <button
                  onClick={() => deleteItem(m.id)}
                  style={{ marginLeft: 10, color: "red" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}
