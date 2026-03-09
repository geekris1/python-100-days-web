import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'
import DayPage from './pages/DayPage'
import QuizPage from './pages/QuizPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/day/:id" element={<DayPage />} />
          <Route path="/quiz/:id" element={<QuizPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
