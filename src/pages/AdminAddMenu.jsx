import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AdminAddMenu() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8085/api/menu/add", {
        name,
        price,
        imageUrl,
      });

      setMsg("success");
      setName("");
      setPrice("");
      setImageUrl("");

    } catch (err) {
      setMsg("error");
    }
  };

  return (
    <div className="container mt-5 pt-5">

      <div className="row justify-content-center">
        <div className="col-md-5">

          <div className="card shadow-sm">
            <div className="card-body">

              <h4 className="text-center fw-bold mb-4">
                ➕ Add Menu Item
              </h4>

              {msg === "success" && (
                <div className="alert alert-success">
                  Menu item added successfully 😊
                </div>
              )}

              {msg === "error" && (
                <div className="alert alert-danger">
                  Error adding item
                </div>
              )}

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label">Item Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter item name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Price</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Image URL</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Paste image URL"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                </div>

                <div className="d-grid">
                  <button className="btn btn-primary">
                    Save Menu Item
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
