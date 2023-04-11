import { useState } from "react";
import { useParams } from "react-router"
import axios from "axios";
import { useNavigate } from "react-router";

export default function Userform(){
    let params=useParams()
    const navigate=useNavigate()
    const id=params.id
    const [data, setData] = useState({
		nombre: "",
		apellido: "",
		biografia: "",
		edad:"",
        telefono:"",
	});
    const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
		console.log(data)
	};
    const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:3000/app/update-profile/" + id;
			const { data: res } = await axios.post(url, data);
            console.log(res)
            navigate('/profile/'+id)
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
    return(
        <div className="flex justify-center m-10 ...">
            <form className="flex flex-col gap-6 bg-slate-200 p-2 ..." onSubmit={handleSubmit}>
                <h1>Edita tu perfil</h1>
                <div className="m-8 ...">
                <input
						type="text"
						placeholder="Nombre"
						name="nombre"
						onChange={handleChange}
						value={data.nombre}
					    required
					/>
                <input
					type="text"
					placeholder="Apellido"
					name="apellido"
					onChange={handleChange}
					value={data.apellido}
				    required
				/>
                </div>
                <input
					type="text"
					placeholder="Sobre ti"
					name="biografia"
					onChange={handleChange}
					value={data.biografia}
				    required
                    className="m-8 ..."
				/>
                <input
					type="number"
					placeholder="Edad"
					name="edad"
					onChange={handleChange}
					value={data.edad}
				    required
                    className="m-8 ..."
				/>
                <input
					type="text"
					placeholder="Telefono de contacto"
					name="telefono"
					onChange={handleChange}
					value={data.telefono}
				    required
                    className="m-8 ..."
				/>
                <br />
                <button type="submit" className="m-8 ...">
					Registrate
				</button>
            </form>
        </div>
    )
}