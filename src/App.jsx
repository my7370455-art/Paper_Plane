import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import MainPage from './pages/MainPage'
import PublicLettersPage from './pages/PublicLettersPage'
import UserPage from './pages/UserPage'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app-body">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/public" element={<PublicLettersPage />} />
          <Route path="/profile" element={<UserPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
