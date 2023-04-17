import axios from "axios";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react"
import { decodeToken } from "react-jwt";

export default function FormEvento(){
    const navigate=useNavigate()
    const [error,setError]=useState('')
    const [key,setKey]=useState("")
    const [des,setDes]=useState("")
    const decodedID=decodeToken(JSON.parse(localStorage.getItem('token')))
    const id=decodedID.id
    const categoria=["Computación","Industrial","Administracion","Contaduria","Robotica","Derecho","Matemática","Humanitas","Lógica","Electricidad","Física","Estadística","Programación","Química","Mecanica","Termodinámica","Íngles"]
    const tipo=["Videoconferencia","Foro Chat","Presentación","Diplomado","Dinámica","Encuesta","Chats","Juegos Interactivos","Stand Virtual","Streaming","Aula Virtual","Taller"]
    const [data, setData] = useState({
        imagen:null,
		organizador: "",
		titulo: "",
		descripcion: [],
		keywords:[],
        facultad:"",
        tipo:[],
        categoria:[],
        fecha:"",
        hora:"",
        duracion:'',
        lugar:''
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
    const handleImg = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.files[0] });
		// console.log(data)
	};
    function handleTip(e){
        if (data.tipo.find(i=>i===e.target.value)) {
            alert("no puedes agregar 2 tipos de evento iguales") 
        }else{
            setData({
                ...data,
                tipo:[...data.tipo,e.target.value]
            })  
        }

    }
    function handleCat(e){
        if (data.categoria.find(i=>i===e.target.value)) {
            alert("no puedes agregar 2 categorias iguales") 
        }else{
            setData({
                ...data,
                categoria:[...data.categoria,e.target.value]
            })  
        }

    }
    function handleDelete(e){
        setData({
            ...data,
            tipo:data.tipo.filter(co=>co!==e)
        })
    }
    function handleKey(){
        setData({
            ...data,
            keywords:[...data.keywords, key]
        })
    }
    const handleArra = ({ currentTarget: input }) => {
        setKey(input.value);
		console.log(key)
	};
    const handleDes = ({ currentTarget: input }) => {
        setDes(input.value);
		console.log(des)
	};
    console.log(data)    
    const handleSubmit = async (e) => {
        setData({
            ...data,
            descripcion:[...data.descripcion, des]
        })
        e.preventDefault();
        console.log(data);
        let body = new FormData()
        data.imagen = data.imagen !== null && (body.append('imagen', data.imagen))
        data.organizador = data.organizador !== '' && (body.append('organizador', data.organizador))
        data.titulo = data.titulo !== '' && (body.append('titulo', data.titulo))
        data.descripcion = data.descripcion.length !== 0 && (body.append('descripcion', data.descripcion))
        data.keywords = data.keywords.length !== 0 && (body.append('keywords', data.keywords))
        data.facultad = data.facultad !== '' && (body.append('facultad', data.facultad))
        data.tipo = data.tipo.length !== 0 && (body.append('tipo', data.tipo))
        data.categoria = data.categoria.length !== 0 && (body.append('categoria', data.categoria))
        data.fecha = data.fecha !== '' && (body.append('fecha', data.fecha))
        data.hora = data.hora !== '' && (body.append('hora', data.hora))
        data.duracion = data.duracion !== '' && (body.append('duracion', data.duracion))
        data.lugar = data.lugar !== '' && (body.append('lugar', data.lugar))

		try {
			const url = "http://localhost:3000/events/create-event/" + id;
			const { data: res } = await axios.post(url, body);
            console.log(res)
            navigate('/profile')
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 404 &&
				error.response.status <= 500
			) {
				setError(error.response.data.messageError);
			}
		}
	};
    useEffect(() => {
        const autenticarUsuario = () => {
            const token = localStorage.getItem("token");
            if(!token){
                navigate("/login");
                return;
            }
        }
        autenticarUsuario()
    },[]) 
    return(
        <div className="flex justify-center m-10 ...">
            <form className="flex flex-col bg-slate-200 p-2 bg-white rounded-lg ..." onSubmit={handleSubmit}>
                <div className="flex justify-center m-2 ...">
                    <h1 className="text-xl font-semibold ...">Edita tu perfil</h1>
                </div>
                <input 
                type="file" 
                name="imagen"
                onChange={handleImg}
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
                        <option value="Facultad De Ingienieria">Facultad de ingeniería</option>
                        <option value="Facultad de ciencias económicas, administrativas y gerenciales">Facultad de ciencias económicas, administrativas y gerenciales</option>
                        <option value="Facultad de ciencias jurídicas, políticas y sociales">Facultad de ciencias jurídicas, políticas y sociales</option>
                    </select>
                </div>
                <input
					type="text"
					placeholder="Descripcion del evento"
					name="descripcion"
					onChange={handleDes}
					value={des}
				    required
                    className="h-10 ml-2 bg-slate-100 rounded-lg ..."
				/>
                <div className="select">
                    <label> Tipo de evento:</label>
                    <br />
                    <select onChange={(e)=>handleTip(e)} name="tipo" value={data.tipo} required>   
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
                <div className="bo">
                    <input
                        type="text"
                        placeholder="Palabras claves"
                        name="keywords"
                        onChange={handleArra}
                        value={key}
                        required
                        className="h-10 ml-2 bg-slate-100 rounded-lg ..."
                    />
                    <button type="reset"  onClick={handleKey}>
                        agregar keyword
                    </button>
                </div>
                <div className="select">
                    <label> Categoria del evento:</label>
                    <br />
                    <select onChange={(e)=>handleCat(e)} name="categoria" value={data.categoria} required>   
                        {categoria.map((cat)=>(
                            <option value={cat} name="categoria">{cat}</option>
                        ))}
                    </select>
                </div>
                {data.categoria.map(e=>
                    <div className="flex flex-row">
                        <button className="X" onClick={()=>handleDelete(e)}>X</button>
                        <p>{e}</p>
                    </div>
                    )}
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
					placeholder="Duracion del evento"
					name="duracion"
					onChange={handleChange}
					value={data.duracion}
				    required
                    className="h-10 ml-2 bg-slate-100 rounded-lg ..."
				/>
                <input
					type="text"
					placeholder="Lugar del evento"
					name="lugar"
					onChange={handleChange}
					value={data.lugar}
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