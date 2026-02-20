import React, { useState } from "react";
import { Link } from "react-router";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

  };
  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            onInput={(e) => setUsername(e.target.value)}
            type="text"
            name="username"
            placeholder="Enter username"
          />
          <input
            onInput={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            placeholder="Enter email"
          />
          <input
            onInput={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Enter password"
          />
          <button>Register</button>
          <p>
            You already have account?{" "}
            <Link className="toggleAuthForm" to={"/login"}>
              Login
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Register;
