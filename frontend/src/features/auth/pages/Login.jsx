import React, { useState } from "react";
import "../style/form.scss";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    handleLogin(username, password).then((res) => {
      console.log(res);
      navigate("/");
    });
  };

  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            onInput={(e) => setUsername(e.target.value)}
            type="text"
            name="username"
            placeholder="Enter username"
          />
          <input
            onInput={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Enter password"
          />
          <button>Login</button>
          <p>
            You don't have account?{" "}
            <Link className="toggleAuthForm" to={"/register"}>
              Register
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Login;
