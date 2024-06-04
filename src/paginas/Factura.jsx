import { useLocation, useNavigate } from 'react-router-dom';

function Factura() {
	const { state } = useLocation();
	console.log('factura', state);
  let totalPagar = 0;
  const navigate = useNavigate();
  
  const inicio = () => {
    navigate('/');
  }
	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>Resumen de compra</h1>
			<div className='contenedorCarrito'>
				<table>
					<thead>
						<tr>
							<th>Cantidad</th>
							<th>Articulo</th>
							<th>Descripcion</th>
							<th>Precio</th>
						</tr>
					</thead>
					<tbody>
						{state.map((itemCarrito) => {
							const obtenerCantidad = itemCarrito.precio
								.replace('$', '')
								.replace(',', '');
              totalPagar += parseInt(obtenerCantidad);
							return (
								<tr key={itemCarrito.id} className='listaCarrito'>
									<td>1</td>
									<td>{itemCarrito.titulo}</td>
									<td>{itemCarrito.descripcion}</td>
									<td>{itemCarrito.precio}.00</td>
								</tr>
							);
						})}
					</tbody>
					<tfoot>
						<tr>
              <th>{state.length}</th>
							<th></th>
							<th>Total Pagado</th>
              <th>${totalPagar.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</th>
						</tr>
					</tfoot>
				</table>
				<div className='botonesAccion'>
					<button className='btnInicio' onClick={inicio}>Ir al Inicio</button>
				</div>
			</div>
		</div>
	);
}

export default Factura;
