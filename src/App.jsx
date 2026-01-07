import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TicketDetailPage from './pages/TicketDetailPage'

function App() {
  return (
    <div className="phone-container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ticket" element={<TicketDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
