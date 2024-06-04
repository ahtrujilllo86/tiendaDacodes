import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TarjetaProducto from '../components/TarjetaProducto';

function Producto() {
	const { state } = useLocation();
	const [itemsCarrito, setitemsCarrito] = useState(0);

	useEffect(() => {
		const datos = localStorage.getItem('carrito');
		if (datos !== null) {
			console.log(JSON.parse(datos).length);
			setitemsCarrito(JSON.parse(datos).length);
		}
	}, []);

	return (
		<div>
			<div className='estadoCarrito'>{itemsCarrito}</div>
			<div className='productoId'>
				<TarjetaProducto producto={state} />
			</div>
		</div>
	);
}

export default Producto;
