/* 
    File: main.jsx
    Developers: Salman Vahora, Bat An Dinh, Artemis, Edgar, Sriraj Bura
    Description: React entry point that initializes the application, loads global styles, Bootstrap, and renders the App component into the root DOM element.
    Date: November 23 2025
*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/js/all.min.js'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)