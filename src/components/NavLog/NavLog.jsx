import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import user_img from './user.png'
const Main = () => {
	const [user,setUser]=useState(null)
	const [estadoMenu, setEstadoMenu] = useState(false);
	const token = localStorage.getItem("token");
	const navigate=useNavigate()

	const handleLogout = () => {
		localStorage.clear("token");
		setEstadoMenu(false)
		navigate('/login')
	};
	const getDataUSer = () => {
		const img = JSON.parse(localStorage.getItem('imgPerfil'))
		const username = JSON.parse(localStorage.getItem('username'))
		const rol=localStorage.getItem("rol")
		setUser({img, username,rol});
		console.log(user)
	}

	useEffect(() => {
		getDataUSer();
		if(!token){
			return navigate("/login");
		}
	}, []);

	const userIcon = (estado)=>{
		setEstadoMenu(!estado);
		getDataUSer();
	}
	
	return (
		<div>
			{ token 
				? 
				<>
					<nav className="flex-col sm:flex-row w-full h-auto flex items-center justify-between text-titNav">
						<Link to={'/'} className="text-2xl font-bold mt-6 sm:mt-0 sm:ml-8 hover:bg-green-300 rounded-lg px-2">
							<span>EventoUVM</span>
						</Link>

						<section className="flex flex-col sm:flex-row p-5 items-center gap-5 sm:gap-10">
							{user?.rol==="\"Admin\""?
							<Link to={`/evenForm`} className="text-1xl font-bold">
								CREAR
							</Link>:
							<div className="f">
							</div>
							}
							<Link to={'/home'} className="text-1xl font-bold">
								HOME
							</Link>
							<Link to={'/eventos'} className="text-1xl font-bold">
								EVENTOS
							</Link>
							<img src={user ? user.img : user_img} alt="Usuario" className="w-8 cursor-pointer rounded-full" onClick={() =>{userIcon(estadoMenu)}} />
						</section>
					</nav> 

					{ estadoMenu 
						&&
						<section className="w-64 h-auto shadow-md rounded-b-lg absolute right-0 top-18 flex flex-col items-center justify-center bg-slate-50 p-8 z-10">
							<article className="flex flex-col justify-center items-center pb-5 gap-5">
								<img src={user ? user.img : user_img} alt="User Foto" className="w-16 justify-center ... rounded-full bg-cover" />
								<span className="text-lg font-bold text-[#18551c]">{user.username}</span>
							</article>
							<article className="flex justify-between space-x-2">
								<Link to={`/profile`} className="text-lg font-bold rounded-lg text-[#18551c] w-auto p-2 h-auto">
									Perfil
								</Link>
								<Link to={`/eventos-favoritos`} className="text-lg font-bold rounded-lg text-[#18551c] w-auto p-2 h-auto">
									Favoritos
								</Link>
								<button className="text-lg font-bold rounded-lg text-[#18551c] w-auto p-2 h-auto" onClick={handleLogout}>
									Salir 
								</button>
							</article>
						</section>
					}
				</>:
				<nav className='flex-col sm:flex-row w-full h-auto flex items-center justify-between'>
					<Link to={'/'} className="text-2xl font-bold mt-6 sm:mt-0 sm:ml-8 hover:bg-green-300 rounded-lg px-2">
						<span>EventoUVM</span>
					</Link>
					<section className='flex flex-col sm:flex-row p-5 text-center gap-5 sm:gap-10'>
						<Link to={'/reg'} className='text-titNav font-medium hover:bg-green-300 rounded-lg px-2'>
							REGISTRATE
						</Link>
						<Link to={'/login'} className='text-titNav font-medium hover:bg-green-300 rounded-lg px-2'>
							INICIA SESION
						</Link>
					</section>
				</nav>}
		</div>
	);
};

export default Main;
