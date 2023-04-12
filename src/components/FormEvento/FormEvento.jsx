import { useParams } from "react-router"
import axios from "axios";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react"

export default function FormEvento(){
    // let params=useParams()
    // const navigate=useNavigate()
    // const id=params.id
    // const [user,setUser]=useState({})
    // console.log(user)
    const tipo=["Videoconferencia","Foro Chat","Presentación","Diplomado","Dinámica","Encuesta","Chats","Juegos Interactivos","Stand Virtual","Streaming","Aula Virtual","Taller"]
    const [data, setData] = useState({
		organizador: "",
		titulo: "",
		descripcion: [],
		keywords:["evento","uvm"],
        facultad:"",
        tipo:[],
        categoria:[],
        fecha:"",
        hora:"",
        duracion:''
	});
    const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
		console.log(data)
	};
    function handleSelect(e){
        setData({
            ...data,
            facultad: e.target.value
        })
    }
    function handleTip(e){
        setData({
            ...data,
            tipo:[...data.tipo,e.target.value]
        })
    }
    function handleDelete(e){
        setData({
            ...data,
            tipo:data.tipo.filter(co=>co!==e)
        })
    }
    function handleKey({ currentTarget: input }){
        setData({
            ...data,
            keywords:[...data.keywords,input.value]
        })
        console.log(data.keywords)
    }
    console.log(data)
    // useEffect(() => {
    //     const autenticarUsuario = async () => {
    //         const token = localStorage.getItem("token");
    //         if(!token){
    //             navigate("/login");
    //             return;
    //         }
    //         try {
    //             const { data } = await axios('http://localhost:3000/app/profile/' + id)
    //             console.log(data)
    //             setUser(data);
    //           } catch (error) {
    //             console.log(error.response.data.msg);
    //           }
    //     }
    //     autenticarUsuario()
    // },[])     
    // const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	try {
	// 		const url = "http://localhost:3000/events/update-profile/create-event/:userID" + id;
	// 		const { data: res } = await axios.post(url, data);
    //         console.log(res)
    //         navigate('/profile/'+id)
	// 	} catch (error) {
	// 		if (
	// 			error.response &&
	// 			error.response.status >= 400 &&
	// 			error.response.status <= 500
	// 		) {
	// 			setError(error.response.data.messageError);
	// 		}
	// 	}
	// };
    return(
        <div className="flex justify-center m-10 ...">
            <form className="flex flex-col bg-slate-200 p-2 bg-white rounded-lg ...">
                <div className="flex justify-center m-2 ...">
                    <h1 className="text-xl font-semibold ...">Edita tu perfil</h1>
                </div>
                <div className="m-4 gap-6 ...">
                <input
						type="text"
						placeholder="Nombre del organizador"
						name="organizador"
						onChange={handleChange}
						value={data.organizador}
					    required
                        className="h-10 mr-2 bg-slate-100 rounded-lg ..."
					/>
               <input
					type="text"
					placeholder="Hora del evento"
					name="hora"
					onChange={handleChange}
					value={data.hora}
				    required
                    className="h-10 ml-2 bg-slate-100 rounded-lg ..."
				/>
                </div>
                <div className="select">
                    <label> Facultad:</label>
                    <br />
                    <select onChange={(e)=>handleSelect(e)} name="facultad" value={data.facultad} required>   
                        <option value="Facultad De Ingienieria" name="facultad">Facultad de ingeniería</option>
                        <option value="Facultad de ciencias económicas, administrativas y gerenciales" name="facultad">Facultad de ciencias económicas, administrativas y gerenciales</option>
                        <option value="Facultad de ciencias jurídicas, políticas y sociales" name="facultad">Facultad de ciencias jurídicas, políticas y sociales</option>
                    </select>
                </div>
                <div className="select">
                    <label> Tipo de evento:</label>
                    <br />
                    <select onChange={(e)=>handleTip(e)} name="facultad" value={data.facultad} required>   
                        {tipo.map((tip)=>(
                            <option value={tip} name="facultad">{tip}</option>
                        ))}
                    </select>
                </div>
                {data.tipo.map(e=>
                    <div className="flex flex-row">
                        <button className="X" onClick={()=>handleDelete(e)}>X</button>
                        <p>{e}</p>
                    </div>
                    )}
                <br />
                <input
					type="text"
					placeholder="Fecha del evento"
					name="fecha"
					onChange={handleChange}
					value={data.fecha}
				    required
                    className="h-10 ml-2 bg-slate-100 rounded-lg ..."
				/>
                    <input
					type="text"
					placeholder="Titulo del evento"
					name="titulo"
					onChange={handleChange}
					value={data.titulo}
				    required
                    className="h-10 ml-2 bg-slate-100 rounded-lg ..."
				/>
                    <input
					type="text"
					placeholder="Duracion del evento"
					name="duracion"
					onChange={handleChange}
					value={data.duracion}
				    required
                    className="h-10 ml-2 bg-slate-100 rounded-lg ..."
				/>
                <button type="submit" className="m-4 bg-green-700 h-10 rounded-full text-white font-semibold text-white-500 ...">
					Registrate
				</button>
            </form>
            :
            <div>
                <h1>Cargando Datos</h1>
            </div>
        </div>
    )
}