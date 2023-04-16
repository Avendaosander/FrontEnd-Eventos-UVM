import { useParams } from "react-router"
import axios from "axios";
import { useNavigate } from "react-router";
import { decodeToken } from "react-jwt";
import { useEffect, useState } from "react"

export default function Userform(){
    const decodedID=decodeToken(JSON.parse(localStorage.getItem('token')))
    const id=decodedID.id
    const navigate=useNavigate()
    const [user,setUser]=useState({})
    console.log(user)
    const [data, setData] = useState({
        imagePerfil:"",
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
    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem("token");
            if(!token){
                navigate("/login");
                return;
            }
            try {
                const { data } = await axios('http://localhost:3000/app/profile/' + id)
                console.log(data)
                setUser(data);
              } catch (error) {
                console.log(error.response.data.msg);
              }
        }
        autenticarUsuario()
    },[])     
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
            { user.user?
            <form className="flex flex-col bg-slate-200 p-2 bg-white rounded-lg ..." onSubmit={handleSubmit}>
                <div className="flex justify-center m-2 ...">
                    <h1 className="text-xl font-semibold ...">Edita tu perfil</h1>
                </div>
                <input type="file"
                onChange={handleChange}
                value={data.imagePerfil}
                name="imagePerfil"
                 />
                <div className="m-4 gap-6 ...">
                <input
						type="text"
						placeholder="Nombre"
						name="nombre"
						onChange={handleChange}
						value={data.nombre}
					    required
                        className="h-10 mr-2 bg-slate-100 rounded-lg ..."
					/>
                <input
					type="text"
					placeholder="Apellido"
					name="apellido"
					onChange={handleChange}
					value={data.apellido}
				    required
                    className="h-10 ml-2 bg-slate-100 rounded-lg ..."
				/>
                </div>
                { user.user.rol==="Admin"?
                <div className="flex flex-col bg-slate-200 bg-white rounded-lg ...">
                <input
					type="text"
					placeholder="Sobre ti"
					name="biografia"
					onChange={handleChange}
					value={data.biografia}
				    required
                    className="h-10 mx-4 mb-8 bg-slate-100 rounded-lg ..."
				/>
                </div>:
                <br></br>
                }
                <input
					type="number"
					placeholder="Edad"
					name="edad"
					onChange={handleChange}
					value={data.edad}
				    required
                    className="h-10 mx-4 mb-8 bg-slate-100 rounded-lg ..."
				/>
                <input
					type="text"
					placeholder="Telefono de contacto"
					name="telefono"
					onChange={handleChange}
					value={data.telefono}
				    required
                    className="h-10 mx-4 bg-slate-100 rounded-lg ..."
				/>
                <br />
                <button type="submit" className="m-4 bg-green-700 h-10 rounded-full text-white font-semibold text-white-500 ...">
					Registrate
				</button>
            </form>
            :
            <div>
                <h1>Cargando Datos</h1>
            </div>
        }
        </div>
    )
}