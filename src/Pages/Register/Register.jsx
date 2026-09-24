import { useState } from "react";
import "../Login.css";
import { useNavigate } from "react-router-dom";

function Register() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [registerInfo, setRegisterInfo] = useState({ email: "", password: "", confirmPassword: ""});
  const navigate = useNavigate();

  //validation and login logic can be added here
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterInfo((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    // Perform login logic here
    e.preventDefault();
    setError("");
    // if (registerInfo.email === "" || registerInfo.password === "") {
    //     setError("Please fill in all fields");
    // }
    // if (registerInfo.password.length < 6) {
    //     setError("Password must be at least 6 characters long");
    // }
    // if (!registerInfo.email.includes("@")) {
    //     setError("Please enter a valid email address");
    // }
    // if (registerInfo.password !== registerInfo.confirmPassword) {
    //     setError("Password mismatch")
    // }

    try {
        setLoading(true);
        const response = await fetch(
            "http://localhost:3001/app/register",
            { method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify({
                email: registerInfo.email.trim(),
                password: registerInfo.password,
                confirmPassword: registerInfo.confirmPassword,
              }),
            }
        );

        const data = await response.json();
        console.log("Response: " + data);
        if(!response.ok) {
            setError("Try again later");
            return;
        }
    } catch(error) {
        console.error("Login Error: " + error);
        setError("Unable to login");
    } finally {
        setLoading(false);
    }
    console.log("Registered with email:", registerInfo.email, "and password:", registerInfo.password);

    navigate("/");
    
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <form onSubmit ={handleSubmit} >
        <h2>Register New User</h2>
        <input type="email"
          placeholder="Enter your email"
          name="email"
          value={registerInfo.email}
          onChange={handleChange} />
        <input type="password"
          placeholder="Enter your password"
          name="password"
          value={registerInfo.password}
          onChange={handleChange} />
        <input type="password"
          placeholder="Re-enter your password"
          name="confirmPassword"
          value={registerInfo.confirmPassword}
          onChange={handleChange} />
        <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Register;