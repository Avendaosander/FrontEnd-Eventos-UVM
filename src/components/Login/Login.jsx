import { useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import uvR from "../../assets/uvm.png"

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:3000/login";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/feed";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
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
						<h1>Inicia Sesion</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Entrar
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;

