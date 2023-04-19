import axios from "axios";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react"
import { useParams } from "react-router";

export default function EditEvento(){
    const navigate=useNavigate()
    const params=useParams()
    const id=params.id
    const token=localStorage.getItem("token")
    const [error,setError]=useState('')
    const [key,setKey]=useState("")
    const [des,setDes]=useState("")
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
            setError("No puedes agregar 2 tipos de evento iguales") 
        }else{
            setData({
                ...data,
                tipo:[...data.tipo,e.target.value]
            })  
        }

    }
    function handleCat(e){
        if (data.categoria.find(i=>i===e.target.value)) {
            setError("No puedes agregar 2 categorias iguales") 
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
        if (data.keywords.find(i=>i===key)) {
            setError("No puedes agregar 2 palabras claves iguales") 
        }else{
            setData({
                ...data,
                keywords:[...data.keywords, key]
            })
        }
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
			const url = "http://localhost:3000/events/update-event/" + id;
			const { data: res } = await axios.post(url, body,{
                headers: {Authorization: "Bearer " + JSON.parse(token)}
            });
            console.log(res)
            navigate(`/evento/${id}`)
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
        <div className="flex justify-center m-10 w-98 ...">
            <form className="flex flex-col min-w-[70%] bg-slate-200 p-2 bg-white rounded-lg ..." onSubmit={handleSubmit}>
                <div className="flex justify-center m-2 ...">
                    <h1 className="text-xl font-semibold ...">Edita tu evento</h1>
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
                    className="h-10 ml-2 bg-slate-100 rounded-lg ..."
				/>
                <div className="m-4 gap-6 ...">
                <input
						type="text"
						placeholder="Nombre del organizador"
						name="organizador"
						onChange={handleChange}
						value={data.organizador}				    
                        className="h-10 mr-2 bg-slate-100 rounded-lg ..."
					/>
               <input
					type="time"
					placeholder="Hora del evento"
					name="hora"
					onChange={handleChange}
					value={data.hora}				    
                    className="h-10 ml-2 bg-slate-100 rounded-lg ..."
				/>
                </div>
                <div className="select">
                    <label> Facultad:</label>
                    <br />
                    <select onChange={(e)=>handleSelect(e)} name="facultad" value={data.facultad} >   
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
                    className="h-10 ml-2 bg-slate-100 rounded-lg ..."
				/>
                <div className="select">
                    <label> Tipo de evento:</label>
                    <br />
                    <select onChange={(e)=>handleTip(e)} name="tipo" value={data.tipo} >   
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
                <div className="grid grid-cols-3">
                    <input
                        type="text"
                        placeholder="Palabras claves"
                        name="keywords"
                        onChange={handleArra}
                        value={key}                       
                        className="h-10 ml-2 col-span-2 bg-slate-100 rounded-lg mr-4 ..."
                    />
                    <button type="reset" className="bg-green-700 rounded-lg"  onClick={handleKey}>
                        agregar keyword
                    </button>
                </div>
                    <div className="grid grid-cols-5">
                        {data.keywords.map(e=>
                        <div className="flex gap-4 m-4 p-2 my-2 text-sm text-white bg-green-700 text-center rounded-lg justify-center text-center">
                            <p>{e}</p>
                            <button className="X" onClick={()=>handleDelete(e)}>X</button>
                        </div>
                        )}
                    </div>
                <div className="select">
                    <label> Categoria del evento:</label>
                    <br />
                    <select onChange={(e)=>handleCat(e)} name="categoria" value={data.categoria} >   
                        {categoria.map((cat)=>(
                            <option value={cat} name="categoria">{cat}</option>
                        ))}
                    </select>
                </div>
                <div className="grid grid-cols-5">
                    {data.categoria.map(e=>
                        <div className="flex gap-4 m-4 p-2 my-2 text-sm text-white bg-green-700 text-center rounded-lg justify-center text-center">
                            <p>{e}</p>
                            <button className="mr-2" onClick={()=>handleDelete(e)}>X</button>
                        </div>
                    )}
                </div>
                <input
					type="date"
					placeholder="Fecha del evento"
					name="fecha"
					onChange={handleChange}
					value={data.fecha}				    
                    className="h-10 ml-2 m-2 bg-slate-100 rounded-lg ..."
				/>
                <input
					type="text"
					placeholder="Lugar del evento"
					name="lugar"
					onChange={handleChange}
					value={data.lugar}				    
                    className="h-10 ml-2 m-2 bg-slate-100 rounded-lg ..."
				/>
                {error && <div className='w-98 p-4 my-2 text-sm text-white bg-red-500 text-center rounded-lg justify-center text-center'>{error}</div>}
                <button type="submit" className="m-4 bg-green-700 h-10 rounded-full text-white font-semibold text-white-500 ...">
					Editar
				</button>
            </form>
        </div>
    )
}