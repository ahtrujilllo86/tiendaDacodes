/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
 

function TarjetaProducto({ producto }) {

	const navigate = useNavigate();

	const agregarCarrito = () => {
		Swal.fire({
			position: "center",
			icon: "success",
			title: "Producto Agregado al Carrito!",
			showConfirmButton: false,
			timer: 1500
		});
		const datos = localStorage.getItem('carrito');
		let nuevoCarrito = producto;
		if (datos) {
			const antiguoCarrito = JSON.parse(datos);
			nuevoCarrito = [...antiguoCarrito, producto];
    }
		localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
		navigate('/');
	}

	const regresar = () => {
		navigate('/');
	}

	return (
		<div className='tarjetaProducto'>
			<div>
				<h1>{producto.titulo}</h1>
			</div>
			<div className='imagenDescripcion'>
				<img src='https://i.ibb.co/JHfcdMM/herramientas.jpg' alt='' />
				<p>{producto.descripcion}</p>
			</div>
			<div className="contenedorBotones">
				<button className="btnRegresar" onClick={regresar}>Regresar</button>
				<button className="btnAgregar" onClick={agregarCarrito}>Agregar al carrito</button>
			</div>
		</div>
	);
}

export default TarjetaProducto;
