import React from 'react';
import { useParams } from "react-router"
import { useEffect, useState } from "react"
import axios from 'axios';
import { decodeToken } from "react-jwt";
import { useNavigate, Link } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";


export default function Evento () {
  const params=useParams()
  const navigate=useNavigate()
  const token=localStorage.getItem('token')
  const rol=localStorage.getItem('rol')
  console.log(params.id)
  const [data,setData]=useState({})
  const [parti,setParti]=useState()
  const evenID={ eventID:params.id }
  const even= async ()=>{
    try {
      const info=await axios(`http://localhost:3000/events/event/${params.id}`,{
        headers: { "Authorization": "Bearer " + JSON.parse(token) }
    })
      setData(info.data)
      setParti(info.data.evento.asistencia)
    } catch (error) {
      console.log(error.response.data.msg);
    }
  }
  useEffect(()=>{
    even()
  },[])
  useEffect(() => {
    const autenticarUsuario = async () => {
        const token = localStorage.getItem("token");
        const decodedID=decodeToken(JSON.parse(localStorage.getItem('token')))
        const id=decodedID.id
        if(!token){
            navigate("/login")
            return
        }
    }
    autenticarUsuario()
},[])     

  const handleParti=async(e)=>{
    e.preventDefault()
    const decodedID=decodeToken(JSON.parse(localStorage.getItem('token')))
    const id=decodedID.id
    try {
      const url = "http://localhost:3000/events/toggle-asist/" + id;
			const { data: res } = await axios.post(url, evenID, {
        headers: { "Authorization": "Bearer " + JSON.parse(token) }
    });
      console.log(res)
      setParti(res)
      window.location.reload();
    } catch (error) {
      console.log(error)
    }
  }
  const handleDelete=async()=>{
    try {
      const {data:res}=await axios.post(`http://localhost:3000/events/delete-event/${params.id}`, {
        headers: { "Authorization": "Bearer " + JSON.parse(token) }
    })
      console.log(res)
      navigate('/home')
    } catch (error) {
      console.log(error)
    }
  }
  return (
      <>
      {data.evento?
      <div className="bg-white p-4 border-4 border-green-800/75 m-6">
      <h2 className='justify-center text-center text-2xl m-8 ...'>{data.evento.titulo}</h2>
      <section className='grid grid-cols-2 gap-4 text-white ...'>
            <div className="bg-green-800 p-8 ...">
              <img src={ data.evento.imagen.secure_url } alt="imagen del evento" className='w-full h-full object-contain'/>
            </div>
            <ul className='ml-10 p-8 text-lg font-semibold'>
                <li className='m-2'><p className='text-blue-600'>Organizador del Evento: {data.evento.organizador} </p></li>
                <li className='m-2'>Fecha: {data.evento.fecha}</li>
                <li className='m-2'>Hora: {data.evento.hora}</li>
                <li className='m-2'>Facultad: {data.evento.facultad}</li>
                <li className='m-2'>Lugar del Evento: {data.evento.lugar}</li>
                <div className="flex">
                  <p className='m-2'>Participantes: </p>
                    {data.evento.participantes.map((par, i)=>(
                    <li className='flex m-2' key={i}>🔹{par} </li>
                    ))}
                </div>
                <button className='m-2 px-3 bg-green-700 h-10 rounded-full text-white font-semibold text-white-500'>Añadir a Favoritos<i className="fa-solid fa-star"></i></button>
                {rol==="\"Admin\""?
                  <button className='m-2 px-3 bg-red-500 h-10 rounded-full text-white font-semibold text-white-500' onClick={handleDelete}>Eliminar Evento<i className="fa-solid fa-star"></i></button>:
                  <div className="s">
                  </div>
                }
            </ul>
      </section>
      <section className='grid grid-cols-2 gap-4 m-8 ...'>
            <div className='justify-center text-center m-2 text-lg font-semibold ...'>
                <h3>Descripción:</h3>
                {data.evento.descripcion.map((des, i)=>(
                  <p key={i}>{des} </p>
                ))}
            </div>
            <div className='justify-center text-center m-2 text-lg font-semibold ...'>
                <h3>Palabras Claves:</h3>
                <div className="flex justify-center text-center">
                  {data.evento.keywords.map((key, i)=>(
                    <p key={i}>🔹{key} </p>
                  ))}
                </div>
            </div>
        </section>
        {parti.length>0?
        <div className='justify-center text-center m-2 text-lg font-semibold ...'>
                <h3>Asistencia al evento:</h3>
                <div className="flex flex-wrap text-center justify-center">
                  {parti.map((key, i)=>(
                    <p key={i} className='flex gap-4 m-2'><img src={key.imgPerfil.secure_url} alt="Img_not_fund" className='w-10 rounded-full'/>{key.username} </p>
                  ))}
                </div>
        </div>:
        <div className="cl">
          <h1>Aun no hay participantes</h1>
        </div>
        }
        <Link to={`/edit/${params.id}`}>
          <button className='m-2 px-3 bg-green-700 h-10 rounded-full text-white font-semibold text-white-500'>Editar<i className="fa-solid fa-star"></i></button>
        </Link>
        <button onClick={handleParti} className='m-2 px-3 bg-green-700 h-10 rounded-full text-white font-semibold text-white-500'>Participaras?<i className="fa-solid fa-star"></i></button>
      </div>:
      <div className="flex justify-center text-center p-5">
        <h1 className='text-center'><FaSpinner className='w-32 h-32 animate-spin'/></h1>
      </div>
      }
    </>
  )
}


