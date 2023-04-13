import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import uvR from "../../assets/uvm.png"

const Signup = () => {
	const [data, setData] = useState({
		username: "",
		email: "",
		password: "",
		rol: "User"
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
		console.log(data)
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:3000/register";
			const { data: res } = await axios.post(url, data);
			const id=res.user.id
			console.log(id)
			localStorage.setItem("token", res.token);
			navigate('/perfil/'+id)
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.messageError);
			}
		}
	};

	return (
		<div className='w-full min-h-screen flex justify-center items-center'>
			<div className='w-full h-[31rem] m-8 grid grid-cols-5 rounded-lg shadow-md shadow-black/20'>
				<div className='col-span-2 flex flex-col bg-green-800 justify-center items-center rounded-l-lg'>
					<h1 className="text-4xl self-center text-white mb-3">BIENVENIDO</h1>
					<img src={uvR} alt="img_not_fund" className="h-60"/>
				</div>
				<div className='col-span-3 flex flex-col justify-center items-center rounded-r-lg'>
					<form className='flex flex-col items-center' onSubmit={handleSubmit}>
						<h1 className="text-4xl">Crear Cuenta</h1>
						<input
							type="text"
							placeholder="username"
							name="username"
							onChange={handleChange}
							value={data.username}
							required
							className='w-80 p-4 bg-green-100 my-2 text-sm rounded-lg'
						/>
						<input
							type="email"
							placeholder="email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className='w-80 p-4 bg-green-100 my-2 text-sm rounded-lg'
						/>
						<input
							type="password"
							placeholder="password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className='w-80 p-4 bg-green-100 my-2 text-sm rounded-lg'
						/>
						{error && <div className='w-80 p-4 my-2 text-sm text-white bg-red-500 text-center rounded-lg'>{error}</div>}
						<button type="submit" className='text-white m-2 bg-green-700 px-3 py-2 w-44 font-bold text-sm rounded-2xl cursor-pointer'>
							Registrate
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;

