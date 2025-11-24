/* 
    File: App.jsx
    Developers: Salman Vahora, Bat An Dinh, Artemis, Edgar, Sriraj Bura
    Description: Root component that initializes React Router and loads MainRouter for page routing.
    Date: November 23 2025
*/

import { BrowserRouter } from 'react-router-dom'
import MainRouter from './MainRouter'
import Navbar from './components/navbar'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="app-container">
        <MainRouter />
      </main>
    </BrowserRouter>
  )
}

export default App;