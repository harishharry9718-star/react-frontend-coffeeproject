import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLogin = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await axios.post("coffee-backend-0pn1.onrender.com/api/admin/login", {
        email,
        password,
      });

      localStorage.setItem("adminAuth", "true");
      navigate("/admin");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f2f2f2",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          width: 360,
          padding: 25,
          borderRadius: 10,
          background: "white",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Admin Login</h2>

        {error && (
          <p style={{ color: "red", fontSize: 14, textAlign: "center" }}>
            {error}
          </p>
        )}

        <label>Email</label>
        <input
          type="email"
          placeholder="Admin email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", padding: 8, marginTop: 5, marginBottom: 15 }}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "100%", padding: 8, marginTop: 5 }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            marginTop: 20,
            padding: 10,
            border: "none",
            color: "white",
            background: "black",
            cursor: "pointer",
            borderRadius: 5,
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
