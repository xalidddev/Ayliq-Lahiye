import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Main from './components/Main'
import Details from './components/Details'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
