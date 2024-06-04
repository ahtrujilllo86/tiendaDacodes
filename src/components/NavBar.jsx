import { useNavigate } from 'react-router-dom';
import '../App.css';
import { useEffect } from 'react';

function NavBar() {
	const navigate = useNavigate();

	const inicio = () => {
		navigate('/');
  };
  
  const carrito = () => {
    navigate('/carrito');  
  }

	useEffect(() => {
		const datos = localStorage.getItem('carrito');
		if (datos === null) {
      localStorage.setItem('carrito', JSON.stringify([]));
    }
  }, []);
  
	return (
		<>
			<div className='navbar'>
				<img
					className='imgLogo'
					src='https://i.ibb.co/Tqs6Pq5/logo.jpg'
					alt='logo dacodes'
					onClick={inicio}
				/>
				<h1>Ciber Herramientas</h1>
				<img
					className='imgCarrito'
					src='https://i.ibb.co/0rHW4vS/carrito-Logo.png'
          alt='logo dacodes'
          onClick={carrito}
				/>
			</div>
		</>
	);
}

export default NavBar;
