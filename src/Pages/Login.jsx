import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
    const navigate = useNavigate();

  //validation and login logic can be added here
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    // Perform login logic here
    e.preventDefault();
    setError("");
    if (loginData.email === "" || loginData.password === "") {
    setError("Please fill in all fields");
  }
  if (loginData.password.length < 6) {
    setError("Password must be at least 6 characters long");
  }
  if (!loginData.email.includes("@")) {
    setError("Please enter a valid email address");
  }
    console.log("Logging in with email:", loginData.email, "and password:", loginData.password);

    navigate("/home");
    
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <form onSubmit ={handleSubmit} >
        <h2>Login</h2>
        <input type="email"
          placeholder="Enter your email"
          name="email"
          value={loginData.email}
          onChange={handleChange} />
        <input type="password"
          placeholder="Enter your password"
          name="password"
          value={loginData.password}
          onChange={handleChange} />
        <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
