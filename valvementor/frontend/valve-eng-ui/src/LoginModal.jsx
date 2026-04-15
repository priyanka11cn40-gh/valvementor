import { useState } from "react";

export default function LoginModal({ onClose }) {
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({
    name: "",
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    const url = isRegister
      ? "http://localhost:8080/api/register"
      : "http://localhost:8080/api/login";

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const text = await res.text();
      alert(text);
    } catch (err) {
      alert("Error connecting to server");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{isRegister ? "Register" : "Login"}</h2>
          <button className="close-btn" onClick={onClose} aria-label="Close modal">&times;</button>
        </div>

        {isRegister && (
          <input
            placeholder="Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        )}

        <input
          placeholder="Username"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="login-btn" onClick={handleSubmit}>
          {isRegister ? "Create Account" : "Sign In"}
        </button>

        <p onClick={() => setIsRegister(!isRegister)} style={{ cursor: "pointer", marginTop: "15px", textAlign: "center", fontSize: "0.9rem" }}>
          {isRegister ? "Already have an account? " : "Don't have an account? "}
          <span style={{ color: "var(--primary-orange)", fontWeight: "bold" }}>
            {isRegister ? "Login" : "Register Now"}
          </span>
        </p>
      </div>
    </div>
  );
}
