import React, { useState } from "react";
import "./HomePage.css";

interface HomePageProps {
  onLogin: (username: string, password: string) => void;
  isAuthenticated: boolean;
}

const HomePage: React.FC<HomePageProps> = ({ onLogin, isAuthenticated }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password); // Call the onLogin function passed down from the parent
  };

  return (
    <div className="background">
      <div className="overlay">
        <img src="/bcmothlogowhite.png" alt="Logo" className="overlay_image" />
        <h1>Boat Church loves you</h1>
        <p>Full website coming soon.</p>
        {/* Admin login form */}
        {!isAuthenticated ? (
          <div>
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit}>
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
              <button type="submit">Login</button>
            </form>
          </div>
        ) : (
          <h2>Welcome, Admin!</h2>
        )}
      </div>
    </div>
  );
};

export default HomePage;
