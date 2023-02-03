import './App.scss'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import APropos from './pages/APropos'
import Error from './pages/Error'
import FicheLogement, {loader as ficheLoader} from './pages/FicheLogement'

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
        <Route path='/' element={<Home />} errorElement={<Error />}></Route>
        <Route path='/a-propos' element={<APropos />} errorElement={<Error />}></Route>
        <Route path='/logement/:id' element={<FicheLogement />} errorElement={<Error />} loader={ficheLoader}></Route>
        <Route path='/404' element={<Error />} errorElement={<Error />}></Route>
        <Route path='*' element={<Error />} errorElement={<Error />}></Route>
  </Route>
))

function App() {
  return <RouterProvider router={router} />
}

export default App
