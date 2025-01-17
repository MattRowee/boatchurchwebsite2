import React, { useState } from "react";
import "./Login.css";

interface LoginProps {
  onLogin: (username: string, password: string) => void;
  isAuthenticated: boolean;
}

const Login: React.FC<LoginProps> = ({ onLogin, isAuthenticated }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password); // Call the onLogin function passed down from the parent
  };

  return (
      <div className="container">
        <img src="/bcmothlogowhite.png" alt="Logo" className="overlay_image" />
        {/* Admin login form */}
        {!isAuthenticated ? (
          <div className="loginFormContainer">
            <h2>Login</h2>
            <form className="loginForm" onSubmit={handleSubmit}>
              <input 
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button className="loginFormButton" type="submit">Login</button>
            </form>
          </div>
        ) : (
          <h2>Welcome Back!</h2>
        )}
      </div>
  );
};

export default Login;
