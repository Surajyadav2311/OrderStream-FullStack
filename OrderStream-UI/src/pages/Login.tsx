import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const data = await loginUser(username, password);
      localStorage.setItem("token", data.token);
      navigate("/home");
    } catch (error) {
      console.error("Login failed", error);
      alert("Invalid credentials");
    }
  };

  return (
  <div style={styles.page}>
    {}
    <div style={styles.leftSection}>
      <h1 style={styles.logo}>OrderStream</h1>

      <h2 style={styles.heading}>
        Event-Driven Food Delivery Platform
      </h2>

      <p style={styles.description}>
        Built using React, Spring Boot, Kafka, Docker & AWS
      </p>

      <div style={styles.features}>
        <p>✔ Secure JWT Authentication</p>
        <p>✔ Microservices Architecture</p>
        <p>✔ Real-Time Order Streaming</p>
        <p>✔ Cloud Native Deployment</p>
      </div>

      {}
      <div style={styles.footer}>
        Powered By <span style={styles.name}>Suraj Yadav</span>
      </div>
    </div>

    {}
    <div style={styles.card}>
      <h2 style={styles.cardTitle}>Welcome Back 👋</h2>

      <p style={styles.cardSubtitle}>
        Login to continue to OrderStream
      </p>

      <input
        style={styles.input}
        placeholder="Enter Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        style={styles.input}
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      {}
      <button style={styles.button} onClick={handleLogin}>
        Login
      </button>

      {}
      <button
        style={styles.secondaryButton}
        onClick={() => navigate("/register")}
      >
        Create Account
      </button>
    </div>
  </div>
);
}

const styles: any = {
  page: {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 8%",
    background:
      "linear-gradient(135deg, #0f172a, #1e293b, #0f172a)",
    color: "white",
    fontFamily: "Arial, sans-serif",
  },
footer: {
  marginTop: "50px",
  fontSize: "16px",
  color: "#94a3b8",
},

name: {
  color: "#38bdf8",
  fontWeight: "bold",
},

secondaryButton: {
  marginTop: "15px",
  padding: "14px",
  borderRadius: "10px",
  border: "1px solid #38bdf8",
  background: "transparent",
  color: "#38bdf8",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "0.3s",
},
  leftSection: {
    width: "45%",
  },

  logo: {
    fontSize: "60px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#38bdf8",
  },

  heading: {
    fontSize: "38px",
    marginBottom: "15px",
    lineHeight: "1.3",
  },

  description: {
    fontSize: "18px",
    color: "#cbd5e1",
    marginBottom: "30px",
  },

  features: {
    lineHeight: "2",
    fontSize: "17px",
    color: "#e2e8f0",
  },

  card: {
    width: "380px",
    padding: "40px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
    display: "flex",
    flexDirection: "column",
  },

  cardTitle: {
    fontSize: "32px",
    marginBottom: "10px",
  },

  cardSubtitle: {
    color: "#cbd5e1",
    marginBottom: "30px",
  },

  input: {
    padding: "14px",
    marginBottom: "20px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.2)",
    background: "rgba(255,255,255,0.05)",
    color: "white",
    fontSize: "16px",
    outline: "none",
  },

  button: {
    padding: "14px",
    borderRadius: "10px",
    border: "none",
    background: "#38bdf8",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default Login;