import React, { useRef, useState } from "react";
import "../style/form.scss";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import AuthBanner from "../components/AuthBanner";
import Footer from "../../shared/components/Footer";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const { user, loading, handleLogin } = useAuth();
  const passwordFeildRef = useRef(null);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleLogin(username, password);
    navigate("/");
  };

  if (loading) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }

  return (
    <>
    <main>
      <AuthBanner />
      <div className="form-main">
        <div className="form-container">
          <h1>Instagram</h1>
          <h2>Login</h2>
          <form onSubmit={handleFormSubmit}>
            <input
              onInput={(e) => {
                setUsername(e.target.value);
              }}
              type="text"
              name="username"
              id="username"
              placeholder="Username or email"
            />
            <div className="input-group">
              <input
                ref={passwordFeildRef}
                onInput={(e) => {
                  setPassword(e.target.value);
                }}
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
              />
              {password.length > 0 && (
                <i
                  onClick={() => setShowPassword(!showPassword)}
                  className={showPassword ? "ri-eye-line" : "ri-eye-off-line"}
                ></i>
              )}
            </div>
            <button className="button button-primary">Login</button>
          </form>
          <p>
            Don't have an account ? <Link to={"/register"}>Create one.</Link>
          </p>
        </div>
      </div>
    </main>
    <Footer/>
    </>
  );
};

export default Login;
