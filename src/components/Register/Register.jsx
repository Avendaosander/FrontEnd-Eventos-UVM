import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import uvR from "../../assets/uvm.png"

/**
 * Esta funcion prueba de que el usuario puede registrarse correctamente con una entrada válida
 * Y que el usuario no puede registrarse con campos vacíos y recibe un mensaje de error
 * @returns 
 */
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

/**
 * 
 * Se muestra un mensaje de error si falla el envío del formulario
 * El usuario es redirigido a la página de inicio de sesión después de enviar correctamente el formulario
 * 
 */

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:3000/register";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
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
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>BIENVENIDO</h1>
					<img src={uvR} alt="img_not_fund" />
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Crear Cuenta</h1>
						<input
							type="text"
							placeholder="username"
							name="username"
							onChange={handleChange}
							value={data.username}
							required
							className={styles.input}
						/>
						<input
							type="email"
							placeholder="email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Registrate
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
