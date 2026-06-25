import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ClubPage from './pages/ClubPage'
import AppPage from './pages/AppPage'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/club" element={<ClubPage />} />
        <Route path="/app" element={<AppPage />} />
      </Routes>
      <Footer />
    </>
  )
}
