import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {

        const sendRegisterReq = 

      console.log({
        fullName,
        email,
        username,
        password,
      });

      alert("Account Created Successfully");

      navigate("/");
    } catch (error) {
      console.error("Registration failed", error);
      alert("Registration failed");
    }
  };

  return (
    <div style={styles.page}>
      {/* Left Branding Section */}
      <div style={styles.leftSection}>
        <h1 style={styles.logo}>OrderStream</h1>

        <h2 style={styles.heading}>
          Join The Future Of Food Delivery
        </h2>

        <p style={styles.description}>
          Create your account and explore real-time event-driven
          architecture powered by Kafka, Spring Boot & AWS.
        </p>

        <div style={styles.features}>
          <p>✔ Secure Authentication</p>
          <p>✔ Kafka Event Streaming</p>
          <p>✔ Dockerized Microservices</p>
          <p>✔ Cloud Ready Infrastructure</p>
        </div>

        <div style={styles.footer}>
          Powered By <span style={styles.name}>Suraj Yadav</span>
        </div>
      </div>

      {/* Register Card */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Create Account 🚀</h2>

        <p style={styles.cardSubtitle}>
          Start your OrderStream journey today
        </p>

        <input
          style={styles.input}
          type="text"
          placeholder="Full Name"
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          style={styles.input}
          type="email"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          style={styles.input}
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.button} onClick={handleRegister}>
          Create Account
        </button>

        <button
          style={styles.secondaryButton}
          onClick={() => navigate("/")}
        >
          Back To Login
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
    lineHeight: "1.6",
  },

  features: {
    lineHeight: "2",
    fontSize: "17px",
    color: "#e2e8f0",
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

  card: {
    width: "420px",
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
    marginBottom: "18px",
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
    marginTop: "10px",
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
};

export default Register;