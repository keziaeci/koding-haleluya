import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Chapters } from './Pages/Chapters'
import { Chapter } from './Pages/Chapter'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/kitab/:id' element={<Chapters/>} />
        <Route path='/kitab/:bookId/:chapId' element={<Chapter/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
