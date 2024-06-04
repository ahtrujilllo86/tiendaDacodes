import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Carrito() {
	const [productosCarrito, setproductosCarrito] = useState([]);
	const [itemsCarrito, setitemsCarrito] = useState(0);
	const [botonesAccion, setbotonesAccion] = useState(true);

	const navigate = useNavigate();

	useEffect(() => {
		const datos = localStorage.getItem('carrito');
		console.log(JSON.parse(datos).length);
		if (JSON.parse(datos).length != 0) {
			setitemsCarrito(JSON.parse(datos).length);
			setproductosCarrito(JSON.parse(datos));
			setbotonesAccion(false);
		} else {
			console.log('carritoVacio');
		}
	}, []);

	const inicio = () => {
		navigate('/');
	};

	const vaciarCarrito = () => {
		Swal.fire({
			title: 'Deseas Vaciar el carrito?',
			icon: 'warning',
			showDenyButton: true,
			confirmButtonText: 'Aceptar',
			denyButtonText: `Cancelar`,
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					title: 'Carrito Eliminado',
					icon: 'success',
					timer: 1500,
				});
				localStorage.setItem('carrito', JSON.stringify([]))
				navigate('/');
			} else if (result.isDenied) {
				Swal.fire({
					title: 'No se borro tu carrito',
					icon: 'info',
					timer: 1500,
				});
			}
		});
	};

	const facturar = () => {
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'Pago Realizado con Exito!',
			showConfirmButton: false,
			timer: 1500,
		});
		localStorage.setItem('carrito', JSON.stringify([]))
		navigate('/factura', { state: productosCarrito });
	};

	return (
		<>
			<div className='estadoCarrito'>{itemsCarrito}</div>
			<h1 style={{ textAlign: 'center' }}>Resumen Carrito de Compras</h1>
			<div className='contenedorCarrito'>
				<table>
					<thead>
						<tr>
							<th>Imagen</th>
							<th>Descripcion</th>
							<th>Cantidad</th>
						</tr>
					</thead>
					<tbody>
						{productosCarrito.map((itemCarrito) => {
							return (
								<tr key={itemCarrito.id} className='listaCarrito'>
									<td>
										<img src='https://i.ibb.co/Tqs6Pq5/logo.jpg' alt='' />
									</td>
									<td>{itemCarrito.titulo}</td>
									<td>1</td>
								</tr>
							);
						})}
					</tbody>
				</table>
				<div className='botonesAccion'>
					<button className='btnInicio' onClick={inicio}>
						Ir al Inicio
					</button>
					<button
						className='btnVaciar'
						disabled={botonesAccion}
						onClick={vaciarCarrito}
					>
						Vaciar Carrito
					</button>
					<button
						className='btnPagar'
						disabled={botonesAccion}
						onClick={facturar}
					>
						Pagar
					</button>
				</div>
			</div>
		</>
	);
}

export default Carrito;
