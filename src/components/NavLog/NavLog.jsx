import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useState } from "react";
import {
	Navbar,
	Typography,
	IconButton,
  } from "@material-tailwind/react";

import imgUser from './user.svg';
import fotoUSer from './user.png';

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
	const [estadoMenu, setEstadoMenu] = useState(false);
	const token = localStorage.getItem("token");
	return (
		<div>
			{ token 
				? 
				<div>
					<Navbar className="mx-full max-w-screen-full py-2 px-4 lg:px-8 lg:py-4 bg-white flex text-titNav">
					<div className="container mx-auto flex items-center justify-between">
						<span className="text-2xl font-bold">EventoUVM</span>
					</div>

					<div className="flex container w-full h-full space-x-8 items-center justify-end">
						<Link to={'/'} className="text-1xl font-bold cursor-pointer">
							HOME
						</Link>
						<Link to={'/eventos'} className="text-1xl font-bold cursor-pointer">
							EVENTOS
						</Link>


						<img src={imgUser} alt="Usuario" className="w-8 cursor-pointer" onClick={() =>setEstadoMenu(!estadoMenu)} />
					</div>
					</Navbar> 

					{ estadoMenu 
						? 
						<div className="w-64 h-auto shadow-md rounded-lg absolute right-16 top-20 flex flex-col items-center justify-center bg-slate-50 p-8 z-50">
							<div className="flex flex-col items-center pb-12">
								<img src={fotoUSer} alt="User Foto" className="w-16" />
								<span className="text-lg font-medium">Nombre del Usuario</span>
							</div>
							<div className="flex justify-between space-x-16">
								<Link to={`/profile/${token}`} className="text-lg font-bold rounded-lg text-[#18551c] w-auto p-2 h-auto">
									Perfil
								</Link>
								<button className="text-lg font-bold rounded-lg text-[#18551c] w-auto p-2 h-auto" onClick={handleLogout}>
									Salir 
								</button>
							</div>
	
						</div> 
						:
						null
					}
				</div>:
			<div className="navHo">
				<nav className={styles.navbar}>
					<h1>EventoUVM</h1>
					<div className={styles.end}>
						<div className={styles.re}>
							<Link to={'/reg'}>
								REGISTRATE
							</Link>
						</div>
						<div className={styles.lo}>
							<Link to={'/login'}>
								INICIA SESION
							</Link>
						</div>
					</div>
				</nav>
			</div>}
		</div>
	);
};

export default Main;
