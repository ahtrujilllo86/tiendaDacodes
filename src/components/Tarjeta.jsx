/* eslint-disable react/prop-types */ 
import { Link } from "react-router-dom"

function Tarjeta({producto}) {
  
  return (
    <div className="tarjeta">
      <img src="https://i.ibb.co/JHfcdMM/herramientas.jpg" alt="" />
      <h3>{producto.titulo}</h3>
      <p>{producto.descripcion}</p>
      <p>{producto.precio}</p>
      <Link to={`/producto/${producto.id}`} state={producto}>Ver producto</Link>
    </div>
  )
}

export default Tarjeta