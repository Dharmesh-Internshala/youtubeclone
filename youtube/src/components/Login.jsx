import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Make the function asynchronous
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Fetch request to backend API
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Set token and username in local storage or context
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify({ username: data.username }));

        setUser(data.username); // Set logged-in user's name
        navigate("/"); // Redirect to home page
      } else {
        // Handle error from the API
        alert(data.message || "Invalid email or password");
      }
    } catch (error) {
      alert("An error occurred during login. Please try again.");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
}

export default Login;
