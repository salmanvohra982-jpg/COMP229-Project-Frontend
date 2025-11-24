/* 
    File: main.jsx
    Developers: Salman Vahora, Bat An Dinh, Artemis, Edgar, Sriraj Bura
    Description: React entry point that initializes the application, loads global styles, Bootstrap, and renders the App component into the root DOM element.
    Date: November 23 2025
*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)