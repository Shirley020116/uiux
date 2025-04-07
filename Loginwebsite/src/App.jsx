import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Profile from './profile.jsx';
import NewAccount from './createAccount.jsx';
import { useState, useEffect } from 'react';

function LoginPage() {
  const navigate = useNavigate();
  
  // 設定 theme 狀態，並切換 data-theme 屬性
  const [theme, setTheme] = useState('light');
  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleLogin = () => {
    navigate('/profile');
  };

  const handleNewAccount = () => {
    navigate('/createAccount');
  };

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
    <div className="loginBox">
      <h1 className="loginText">Login to website</h1>
      <p className="labelText">Username</p>
      <input type="text" placeholder="Username" className="loginInput" />
      <p className="labelText">Email</p>
      <input type="text" placeholder="youremail@email.com" className="loginInput" />
      
      <motion.button
        className="loginbutton"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleLogin}>
        Login
      </motion.button>
      
      <motion.button
        className="loginbutton"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleNewAccount}>
        Create New Account
      </motion.button>
      
    </div>
    <div>
      <button className="themeToggle" onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </div>
    </>
  );
}

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/createAccount" element={<NewAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
