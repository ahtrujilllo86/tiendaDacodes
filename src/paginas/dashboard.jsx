import Bienvenida from '../components/Bienvenida';
// import NavBar from '../components/NavBar';
import Tarjeta from '../components/Tarjeta';
import Catalogo from '../catalogo.json';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from 'react';

function Dashboard() {
	let productosPaginados = [];

	const [paginacion, setpaginacion] = useState([]);
	const [resultados, setresultados] = useState(10);
	const [masProductos, setmasProductos] = useState(true);
	const [itemsCarrito, setitemsCarrito] = useState(0);

	useEffect(() => {
		let productosPaginados = Catalogo.slice(0, 10);
		setpaginacion(productosPaginados);
		const datos = localStorage.getItem('carrito');
		if (datos !== null) {
			console.log(JSON.parse(datos).length);
			setitemsCarrito(JSON.parse(datos).length);
		}
	}, []);

	const aumentarPaginacion = () => {
		if (resultados >= Catalogo.length) {
			setmasProductos(false);
			return false;
		}
		setTimeout(() => {
			setresultados(resultados + 10);
			productosPaginados = Catalogo.slice(0, resultados + 10);
			setpaginacion(productosPaginados);
		}, 1500);
	};

	return (
		<>
			<div className='estadoCarrito'>{itemsCarrito}</div>
			<Bienvenida />
			<div className='catalogo'>
				{paginacion.map((producto) => {
					return (
						<div key={producto.id}>
							<Tarjeta producto={producto} />
						</div>
					);
				})}
			</div>
			<InfiniteScroll
				dataLength={paginacion.length}
				next={aumentarPaginacion}
				hasMore={masProductos}
				loader={<h3>Cargando más productos ...</h3>}
				endMessage={<h3>No hay mas productos para mostrar</h3>}
			/>
		</>
	);
}

export default Dashboard;
