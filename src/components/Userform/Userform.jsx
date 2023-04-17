import axios from "axios";
import { useNavigate } from "react-router";
import { decodeToken } from "react-jwt";
import { useEffect, useState } from "react"

export default function Userform(){
    const decodedID=decodeToken(JSON.parse(localStorage.getItem('token')))
    const id=decodedID.id
    const navigate=useNavigate()
    const [error, setError] = useState("");
    const [user,setUser]=useState({})
    const [data, setData] = useState({
        imgPerfil:null,
		nombre: "",
		apellido: "",
		biografia: "",
		edad:'',
        telefono:"",
	});
    console.log(data);
    const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
		// console.log(data)
	};
    const handleImg = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.files[0] });
		// console.log(data)
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
                // console.log(data)
                setUser(data);
              } catch (error) {
                console.log(error.response.data.msg);
              }
        }
        autenticarUsuario()
    },[])     
    const handleSubmit = async (e) => {
        if (data.edad !=="" && data.edad>90 || data.edad !=="" && data.edad<15 ) {
            e.preventDefault()
            setError("Ingresa una edad valida por favor")
        }else if (isNaN(data.telefono)===true) {
            e.preventDefault()
            setError("No se permiten letras en el numero")
        } else{
            e.preventDefault();
            console.log(data);
            let body = new FormData()
            data.imgPerfil = data.imgPerfil !== null && (body.append('imgPerfil', data.imgPerfil))
            data.nombre = data.nombre !== '' && (body.append('nombre', data.nombre))
            data.apellido = data.apellido !== '' && (body.append('apellido', data.apellido))
            data.biografia = data.biografia !== '' && (body.append('biografia', data.biografia))
            data.edad = data.edad !== '' && (body.append('edad', data.edad))
            data.telefono = data.telefono !== '' && (body.append('telefono', data.telefono))
            try {
                const url = "http://localhost:3000/app/update-profile/" + id;
                const { data: res } = await axios.post(url, body);
                console.log(res)
                navigate('/profile')
            } catch (error) {
                if (
                    error.response &&
                    error.response.status >= 400 &&
                    error.response.status <= 500
                ) {
                    // setError(error.response.data.messageError);
                }
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
                onChange={handleImg}
                name="imgPerfil"
                 />
                <div className="m-4 gap-6 ...">
                <input
						type="text"
						placeholder="Nombre"
						name="nombre"
						onChange={handleChange}
						value={data.nombre}
                        className="h-10 mr-2 bg-slate-100 rounded-lg ..."
					/>
                <input
					type="text"
					placeholder="Apellido"
					name="apellido"
					onChange={handleChange}
					value={data.apellido}
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
                    className="h-10 mx-4 mb-8 bg-slate-100 rounded-lg ..."
				/>
                <input
					type="text"
					placeholder="Telefono de contacto"
					name="telefono"
					onChange={handleChange}
					value={data.telefono}
                    className="h-10 mx-4 bg-slate-100 rounded-lg ..."
				/>
                {error && <div className='w-80 p-4 my-2 text-sm text-white bg-red-500 text-center rounded-lg'>{error}</div>}
                <br />
                <button type="submit" className="m-4 bg-green-700 h-10 rounded-full text-white font-semibold text-white-500 ...">
					Guardar cambios
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