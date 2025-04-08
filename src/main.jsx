import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './index.css'
import App from './App.jsx'
import Profile from './profile.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
