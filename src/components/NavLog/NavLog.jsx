import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
	Navbar,
  } from "@material-tailwind/react";

import styles from"./styles.module.css"
import axios from "axios"
import { decodeToken } from "react-jwt";
import user_img from './user.png'
const Main = () => {
	const [user,setUser]=useState({})
	const navigate=useNavigate()

	const handleLogout = () => {
		localStorage.removeItem("token");
		navigate('/login')
	};
	const [estadoMenu, setEstadoMenu] = useState(false);
	const token = localStorage.getItem("token");
    const decodedID=decodeToken(JSON.parse(localStorage.getItem('token')))
    const id=decodedID.id

	const getDataUSer = async () => {
		if(!token){
			navigate("/login");
			return;
		}
		try {
			const  data  = await axios('http://localhost:3000/app/profile/'+id)
			setUser(data.data.user);
		} catch (e) {
			console.log(e);
		}
	}
      

    useEffect(() => {
        getDataUSer();
    }, []);

	const userIcon = (estado)=>{
		setEstadoMenu(!estado);
		getDataUSer();

	}
	

	return (
		<div>
			{ token 
				? 
				<div>
					<Navbar className="mx-full max-w-screen-full py-2 px-4 lg:px-8 lg:py-4 bg-white flex text-titNav">
					<div className="container mx-auto flex items-center justify-between">
						<Link to={'/'} className="cursor-pointer">
							<span className="text-2xl font-bold">EventoUVM</span>
						</Link>
						
					</div>

					<div className="flex container w-full h-full space-x-8 items-center justify-end">
						<Link to={'/home'} className="text-1xl font-bold cursor-pointer">
							HOME
						</Link>
						<Link to={'/eventos'} className="text-1xl font-bold cursor-pointer">
							EVENTOS
						</Link>
						<Link to={`/evenForm`} className="text-1xl font-bold cursor-pointer">
							CREAR
						</Link>
						<img src={user[0] ? user.imgPerfil.secure_url : user_img} alt="Usuario" className="w-8 cursor-pointer rounded-full" onClick={() =>{userIcon(estadoMenu)}} />
						
					</div>
					</Navbar> 

					{ estadoMenu 
						? 
						<div className="w-64 h-auto shadow-md rounded-lg absolute right-16 top-20 flex flex-col items-center justify-center bg-slate-50 p-8 z-10">
							<div className="flex flex-col justify-center items-center pb-12">
								<img src={user[0] ? user.imgPerfil.secure_url : user_img} alt="User Foto" className="w-16 justify-center ... rounded-full bg-cover" />
								<span className="text-lg font-medium">{user.nombre} {user.apellido}
								</span>
							</div>
							<div className="flex justify-between space-x-2">
								<Link to={`/profile`} className="text-lg font-bold rounded-lg text-[#18551c] w-auto p-2 h-auto">
									Perfil
								</Link>
								<Link to={`/eventos-favoritos`} className="text-lg font-bold rounded-lg text-[#18551c] w-auto p-2 h-auto">
									Favoritos
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
					<Link to={'/'}>
						<span className="text-2xl font-bold">EventoUVM</span>
					</Link>
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
