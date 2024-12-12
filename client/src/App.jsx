import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainMenu from './components/MainMenu/MainMenu'
import Room1 from './components/Room1/Room1'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainMenu />} />
          <Route path='/Room1' element={<Room1 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
