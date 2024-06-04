import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './paginas/dashboard'
import Producto from './paginas/Producto'
import Carrito from './paginas/Carrito'
import NavBar from './components/NavBar'
import Factura from './paginas/Factura'

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Dashboard /> } />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/producto/:id' element={ <Producto /> } />
          <Route path='/carrito' element={ <Carrito /> } />
          <Route path='/factura' element={ <Factura /> } />
          <Route path='*' element={<Dashboard />} />
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
