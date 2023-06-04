import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'

const App = () => {
  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App