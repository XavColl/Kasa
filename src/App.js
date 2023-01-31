import './App.scss'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import APropos from './pages/APropos'
import Error from './pages/Error'
import FicheLogement from './pages/FicheLogement'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/a-propos' element={<APropos />}></Route>
        <Route path='/logement/:id' element={<FicheLogement />}></Route>
        <Route path='/404' element={<Error />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
