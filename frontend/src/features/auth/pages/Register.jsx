import React, { useRef, useState } from "react";
import "../style/form.scss";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import AuthBanner from "../components/AuthBanner";
import Footer from "../../shared/components/Footer";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const passwordFeildRef = useRef(null);

  const navigate = useNavigate();

  const { user, loading, handleRegister } = useAuth();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleRegister(username, email, password);
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
      <AuthBanner/>
      <div className="form-main">
        <div className="form-container">
        <h1>Instagram</h1>
        <h2>Register</h2>
        <form onSubmit={handleFormSubmit}>
          <input
            onInput={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            name="username"
            id="username"
            placeholder="Username"
          />
          <input
            onInput={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            name="email"
            id="email"
            placeholder="Email address"
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
          <button className="button button-primary">Register</button>
        </form>
        <p>
          Already have an account ? <Link to={"/login"}>Login.</Link>
        </p>
      </div>
      </div>
    </main>
    <Footer/>
    </>
  );
};

export default Register;
