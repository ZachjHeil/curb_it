import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import bg1 from './BG/Bg_1.jpeg';
import bg2 from './BG/Bg_2.jpeg';
import bg3 from './BG/Bg_3.jpeg';
import bg4 from './BG/Bg_4.jpeg';
import bg5 from './BG/Bg_5.jpeg';
import bg6 from './BG/Bg_6.jpeg';

function LoginPage() {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const navigate = useNavigate();

  const backgrounds = [bg1, bg2, bg3, bg4, bg5, bg6];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 8000); // Change image every 8 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [backgrounds.length]);

  const handleLogin = (event) => {
    event.preventDefault();
    console.log('Logging in...');
    navigate('/home');
  };

  const navigateToCreateAccount = () => {
    navigate('/createAccount'); // Update with the correct path
  };

  return (
    <div className="login-container">
      <div className="login-background" style={{ backgroundImage: `url(${backgrounds[backgroundIndex]})` }}></div>
      <div className="login-content">
        <form className="login-form" onSubmit={handleLogin}>
          <h1>Login</h1>
          <label>
            Username:
            <input type="text" required />
          </label>
          <label>
            Password:
            <input type="password" required />
          </label>
          <button type="submit">Login</button>
        </form>
        <div className="alternative-action">
          <p>Don't have an account?</p>
          <button type="button" id="Create" onClick={navigateToCreateAccount}>Create Account</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
