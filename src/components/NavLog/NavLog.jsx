import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
	const token = localStorage.getItem("token");
	return (
		<div className="nav">
			{token?
			<div className="hom">
				<nav className={styles.navbar}>
					<h1>EventoUVM</h1>
					<button className={styles.white_btn} onClick={handleLogout}>
						Cerrar sesion
					</button>
				</nav>
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
